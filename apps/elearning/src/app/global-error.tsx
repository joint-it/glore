'use client'

export interface GlobalErrorProps {
  reset: () => void
}

const GlobalError = ({ reset }: GlobalErrorProps) => (
  <html>
    <body>
      <h2>{'Something went wrong!'}</h2>
      <button
        onClick={() => {
          reset()
        }}
      >
        {'Try again'}
      </button>
    </body>
  </html>
)

export default GlobalError
