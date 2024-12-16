'use client'

import { forwardRef } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

export const Avatar = forwardRef<React.ComponentRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      className={cn('rounded-full relative flex h-10 w-10 shrink-0 overflow-hidden', className)}
      ref={ref}
      {...props}
    />
  ),
)

export interface AvatarImageProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

export const AvatarImage = forwardRef<React.ComponentRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image className={cn('aspect-square h-full w-full', className)} ref={ref} {...props} />
  ),
)

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

export const AvatarFallback = forwardRef<React.ComponentRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      className={cn('rounded-full flex h-full w-full items-center justify-center bg-muted', className)}
      ref={ref}
      {...props}
    />
  ),
)
