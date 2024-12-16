'use client'

export default ({ reset }: { reset: () => void }) => (
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
