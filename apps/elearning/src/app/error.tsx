'use client'

import { useEffect } from 'react'

export interface ErrorProps {
  error: { digest?: string } & Error
  reset: () => void
}

export default ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>{'Something went wrong!'}</h2>
      <button
        onClick={() => {
          reset()
        }}
      >
        {'Try again'}
      </button>
    </div>
  )
}
