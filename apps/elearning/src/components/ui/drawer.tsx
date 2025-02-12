import { forwardRef } from 'react'

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  type DialogProps,
  type DialogCloseProps as DrawerCloseProps,
  type DialogContentProps as DrawerContentProps,
  type DialogDescriptionProps as DrawerDescriptionProps,
  type DialogOverlayProps as DrawerOverlayProps,
  type DialogTitleProps as DrawerTitleProps,
} from '@radix-ui/react-dialog'

import { Button } from '@/components/ui/button'
import { IconX } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { focusRing } from '@/theme/styles'
import { cn } from '@/theme/utils'

interface DrawerProps extends DialogProps {
  className?: string
}

interface DrawerBodyProps extends React.ComponentPropsWithoutRef<'div'> {}

interface DrawerHeaderProps extends React.ComponentPropsWithoutRef<'div'> {}

interface DrawerFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Drawer = Root
Drawer.displayName = displayName('Drawer')

const DrawerTrigger = Trigger
DrawerTrigger.displayName = displayName('DrawerTrigger')

const DrawerClose = Close
DrawerClose.displayName = displayName('DrawerClose')

const DrawerPortal = Portal
DrawerPortal.displayName = displayName('DrawerPortal')

const DrawerOverlay = forwardRef<React.ComponentRef<typeof Overlay>, DrawerOverlayProps>(({ className, ...props }, ref) => (
  <Overlay
    className={cn(
      `
        fixed inset-0 z-50 overflow-y-auto bg-black/30
        data-[state=closed]:animate-hide
        data-[state=open]:animate-dialogOverlayShow
      `,
      className,
    )}
    ref={ref}
    {...props}
    style={{
      animationDuration: '400ms',
      animationFillMode: 'backwards',
    }}
  />
))
DrawerOverlay.displayName = displayName('DrawerOverlay')

const DrawerContent = forwardRef<React.ComponentRef<typeof Content>, DrawerContentProps>(({ className, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay>
      <Content
        className={cn(
          `
            fixed inset-y-2 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg 'border-gray-200
            'bg-white
            'data-[state=closed]:animate-drawerSlideRightAndFade
            dark:border-gray-900', dark:bg-[#090E1A]',
            data-[state=open]:animate-drawerSlideLeftAndFade',
            focus:outline-none
            max-sm:inset-x-2
            sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6
          `,
          focusRing,
          className,
        )}
        ref={ref}
        {...props}
      />
    </DrawerOverlay>
  </DrawerPortal>
))
DrawerContent.displayName = displayName('DrawerContent')

const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(({ children, className, ...props }, ref) => (
  <div
    className="flex items-start justify-between gap-x-4 border-b border-gray-200 pb-4 dark:border-gray-900"
    ref={ref}
    {...props}
  >
    <div className={cn('mt-1 flex flex-col gap-y-1', className)}>{children}</div>
    <Close asChild>
      <Button className="aspect-square p-1 hover:bg-gray-100 hover:dark:bg-gray-400/10" variant="ghost">
        <IconX aria-hidden="true" className="size-6" />
      </Button>
    </Close>
  </div>
))
DrawerHeader.displayName = displayName('DrawerHeader')

const DrawerTitle = forwardRef<React.ComponentRef<typeof Title>, DrawerTitleProps>(({ className, ...props }, ref) => (
  <Title className={cn('text-base font-semibold text-gray-900 dark:text-gray-50', className)} ref={ref} {...props} />
))
DrawerTitle.displayName = displayName('DrawerTitle')

const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(({ className, ...props }, ref) => (
  <div className={cn('flex-1 py-4', className)} ref={ref} {...props} />
))
DrawerBody.displayName = displayName('DrawerBody')

const DrawerDescription = forwardRef<React.ComponentRef<typeof Description>, DrawerDescriptionProps>(
  ({ className, ...props }, ref) => (
    <Description className={cn('text-gray-500 dark:text-gray-500', className)} ref={ref} {...props} />
  ),
)
DrawerDescription.displayName = displayName('DrawerDescription')

const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse border-t border-gray-200 pt-4 dark:border-gray-900 sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
DrawerFooter.displayName = displayName('DrawerFooter')

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  type DrawerProps,
  type DrawerBodyProps,
  type DrawerCloseProps,
  type DrawerContentProps,
  type DrawerDescriptionProps,
  type DrawerFooterProps,
  type DrawerHeaderProps,
  type DrawerOverlayProps,
  type DrawerTitleProps,
}
