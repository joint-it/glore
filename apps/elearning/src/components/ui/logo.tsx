import { forwardRef } from 'react'

const Logo = forwardRef<SVGSVGElement>((props, ref) => (
  <svg fill="none" ref={ref} stroke="currentColor" viewBox="0 0 48 44" {...props}>
    <path
      d="M32.5 33L32.5 11C32.5 6.30558 28.6944 2.5 24 2.5C19.3056 2.5 15.5 6.30558 15.5 11L15.5 33C15.5 37.6944 19.3056 41.5 24 41.5C28.6944 41.5 32.5 37.6944 32.5 33Z"
      strokeWidth={5}
    />
  </svg>
))

export { Logo }
