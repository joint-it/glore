import { useMemo } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const ButtonBase = ({ asChild = false, className, size, variant, ...props }: ButtonProps) => {
  const Component = useMemo(() => (asChild ? Slot : 'button'), [asChild])

  return <Component className={cn(buttonVariants({ variant, size, className }))} data-slot="button" {...props} />
}

const Button = ({ children, disabled, loading, ...props }: ButtonProps) => {
  const isDisabled = useMemo(() => disabled || loading, [disabled, loading])

  return (
    <ButtonBase disabled={isDisabled} {...props}>
      {loading ? <LoaderIcon className="animate-spin" /> : children}
    </ButtonBase>
  )
}

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
  },
)

export { Button, buttonVariants }
