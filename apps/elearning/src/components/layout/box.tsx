import { forwardRef } from 'react'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => <div ref={ref} {...props} />)
