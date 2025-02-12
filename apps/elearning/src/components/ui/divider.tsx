import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ children, className, ...props }, ref) => (
  <div
    className={cn(`mx-auto flex w-full items-center justify-between gap-3 text-sm text-gray-500`, className)}
    ref={ref}
    {...props}
  >
    {children ? (
      <>
        <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
        <div className="whitespace-nowrap">{children}</div>
        <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
      </>
    ) : (
      <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
    )}
  </div>
))
Divider.displayName = displayName('Divider')

export { Divider, type DividerProps }
