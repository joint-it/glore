'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/db/server'
import { encodedRedirect } from '@/lib/utils'

export const signUpAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString() as string
  const password = formData.get('password')?.toString() as string
  const db = await createClient()
  const origin = (await headers()).get('origin') as string

  if (!email || !password) {
    return encodedRedirect('error', '/', 'Email and password are required')
  }

  const { error } = await db.auth.signUp({
    email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
    password,
  })

  if (error) {
    console.error(`${error.code ? `${error.code} ` : ''}${error.message}`)
    return encodedRedirect('error', '/sign-up', error.message)
  } else {
    return encodedRedirect(
      'success',
      '/sign-up',
      'Thanks for signing up! Please check your email for a verification link.',
    )
  }
}

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return encodedRedirect('error', '/sign-in', error.message)
  }

  return redirect('/protected')
}

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString()
  const supabase = await createClient()
  const origin = (await headers()).get('origin') as string
  const callbackUrl = formData.get('callbackUrl')?.toString()

  if (!email) {
    return encodedRedirect('error', '/forgot-password', 'Email is required')
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  })

  if (error) {
    console.error(error.message)
    return encodedRedirect('error', '/forgot-password', 'Could not reset password')
  }

  if (callbackUrl) {
    return redirect(callbackUrl)
  }

  return encodedRedirect('success', '/forgot-password', 'Check your email for a link to reset your password.')
}

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient()

  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!password || !confirmPassword) {
    encodedRedirect('error', '/protected/reset-password', 'Password and confirm password are required')
  }

  if (password !== confirmPassword) {
    encodedRedirect('error', '/protected/reset-password', 'Passwords do not match')
  }

  const { error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    encodedRedirect('error', '/protected/reset-password', 'Password update failed')
  }

  encodedRedirect('success', '/protected/reset-password', 'Password updated')
}

export const signOutAction = async () => {
  const db = await createClient()
  await db.auth.signOut()
  return redirect('/sign-in')
}
