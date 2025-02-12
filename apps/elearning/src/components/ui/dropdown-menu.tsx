import { forwardRef } from 'react'

import {
  CheckboxItem,
  Content,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuTrigger,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioItem,
  Separator,
  SubContent,
  SubTrigger,
  type DropdownMenuCheckboxItemProps as _DropdownMenuCheckboxItemProps,
  type DropdownMenuItemProps as _DropdownMenuItemProps,
  type DropdownMenuRadioItemProps as _DropdownMenuRadioItemProps,
  type DropdownMenuContentProps,
  type DropdownMenuGroupProps,
  type DropdownMenuLabelProps,
  type DropdownMenuProps,
  type DropdownMenuRadioGroupProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuSubProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu'

import { IconCheck, IconChevronRight, IconCircle } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { cn } from '@/theme/utils'

interface DropdownMenuCheckboxItemProps extends _DropdownMenuCheckboxItemProps {
  hint?: string
  shortcut?: string
}

interface DropdownMenuIconWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {}

interface DropdownMenuItemProps extends _DropdownMenuItemProps {
  hint?: string
  shortcut?: string
}

interface DropdownMenuRadioItemProps extends _DropdownMenuRadioItemProps {
  hint?: string
  iconType?: 'check' | 'radio'
  shortcut?: string
}

DropdownMenu.displayName = displayName('DropdownMenu')

const DropdownMenuCheckboxItem = forwardRef<React.ComponentRef<typeof CheckboxItem>, DropdownMenuCheckboxItemProps>(
  ({ checked, children, className, hint, shortcut, ...props }, ref) => (
    <CheckboxItem
      checked={checked}
      className={cn(
        `
          relative flex cursor-pointer items-center gap-x-2 rounded py-1.5 pr-1 pl-8 text-gray-900 transition-colors outline-none
          select-none
          dark:text-gray-50 dark:data-[disabled]:text-gray-600
          data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none
          data-[state=checked]:font-semibold
          focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900
          hover:bg-gray-100 hover:dark:bg-gray-900
          sm:text-sm
        `,
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <ItemIndicator>
          <IconCheck aria-hidden="true" className="size-full shrink-0 text-gray-800 dark:text-gray-200" />
        </ItemIndicator>
      </span>
      {children}
      {hint && <span className="ml-auto text-sm font-normal text-gray-400 dark:text-gray-600">{hint}</span>}
      {shortcut && (
        <span className="ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600">
          {shortcut}
        </span>
      )}
    </CheckboxItem>
  ),
)
DropdownMenuCheckboxItem.displayName = displayName('DropdownMenuCheckboxItem')

const DropdownMenuContent = forwardRef<React.ComponentRef<typeof Content>, DropdownMenuContentProps>(
  ({ align = 'center', className, collisionPadding = 8, loop = true, sideOffset = 8, ...props }, ref) => (
    <Portal>
      <Content
        align={align}
        className={cn(
          `
            relative z-50 max-h-[var(--radix-popper-available-height)] min-w-48 overflow-hidden rounded-md border border-gray-200
            bg-white p-1 text-gray-900 shadow-xl shadow-black/[2.5%] will-change-[transform,opacity]
            dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50
            data-[side=bottom]:animate-slideDownAndFade
            data-[side=left]:animate-slideLeftAndFade
            data-[side=right]:animate-slideRightAndFade
            data-[side=top]:animate-slideUpAndFade
            data-[state=closed]:animate-hide
          `,
          className,
        )}
        collisionPadding={collisionPadding}
        loop={loop}
        ref={ref}
        sideOffset={sideOffset}
        {...props}
      />
    </Portal>
  ),
)
DropdownMenuContent.displayName = displayName('DropdownMenuContent')

DropdownMenuGroup.displayName = displayName('DropdownMenuGroup')

const DropdownMenuIconWrapper = (props: DropdownMenuIconWrapperProps) => {
  const { className, ...rest } = props
  return (
    <div
      className={cn(
        `
          text-gray-600
          dark:text-gray-400
          group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700
        `,
        className,
      )}
      {...rest}
    />
  )
}
DropdownMenuIconWrapper.displayName = displayName('DropdownMenuIconWrapper')

const DropdownMenuItem = forwardRef<React.ComponentRef<typeof Item>, DropdownMenuItemProps>(
  ({ children, className, hint, shortcut, ...props }, ref) => (
    <Item
      className={cn(
        `
          group/DropdownMenuItem relative flex cursor-pointer items-center rounded py-1.5 pr-1 pl-2 text-gray-900
          transition-colors outline-none select-none
          dark:text-gray-50 dark:data-[disabled]:text-gray-600
          data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none
          data-[state=checked]:font-semibold
          focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900
          hover:bg-gray-100 hover:dark:bg-gray-900
          sm:text-sm
        `,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      {hint && <span className="ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600">{hint}</span>}
      {shortcut && <span className="ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600">{shortcut}</span>}
    </Item>
  ),
)
DropdownMenuItem.displayName = displayName('DropdownMenuItem')

const DropdownMenuLabel = forwardRef<React.ComponentRef<typeof Label>, DropdownMenuLabelProps>(({ className, ...props }, red) => (
  <Label
    className={cn('px-2 py-2 text-xs font-medium tracking-wide text-gray-500 dark:text-gray-500', className)}
    ref={red}
    {...props}
  />
))
DropdownMenuLabel.displayName = displayName('DropdownMenuLabel')

DropdownMenuRadioGroup.displayName = displayName('DropdownMenuRadioGroup')

const DropdownMenuRadioItem = forwardRef<React.ComponentRef<typeof RadioItem>, DropdownMenuRadioItemProps>(
  ({ children, className, hint, iconType = 'radio', shortcut, ...props }, ref) => (
    <RadioItem
      className={cn(
        `
          group/DropdownMenuRadioItem relative flex cursor-pointer items-center gap-x-2 rounded py-1.5 pr-1 pl-8 text-gray-900
          transition-colors outline-none select-none
          dark:text-gray-50 dark:data-[disabled]:text-gray-600
          data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none
          data-[state=checked]:font-semibold
          focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900
          hover:bg-gray-100 hover:dark:bg-gray-900
          sm:text-sm
        `,
        className,
      )}
      ref={ref}
      {...props}
    >
      {iconType === 'radio' ? (
        <span className="absolute left-2 flex size-4 items-center justify-center">
          <IconCircle
            aria-hidden="true"
            className={`
              size-full shrink-0 text-blue-500
              dark:text-blue-500
              group-data-[state=checked]/DropdownMenuRadioItem:flex
              group-data-[state=unchecked]/DropdownMenuRadioItem:hidden
            `}
          />
          <IconCircle
            aria-hidden="true"
            className={`
              size-full shrink-0 text-gray-300
              dark:text-gray-700
              group-data-[state=checked]/DropdownMenuRadioItem:hidden
              group-data-[state=unchecked]/DropdownMenuRadioItem:flex
            `}
          />
        </span>
      ) : iconType === 'check' ? (
        <span className="absolute left-2 flex size-4 items-center justify-center">
          <IconCheck
            aria-hidden="true"
            className={`
              size-full shrink-0 text-gray-800
              dark:text-gray-200
              group-data-[state=checked]/DropdownMenuRadioItem:flex
              group-data-[state=unchecked]/DropdownMenuRadioItem:hidden
            `}
          />
        </span>
      ) : null}
      {children}
      {hint && <span className="ml-auto text-sm font-normal text-gray-400 dark:text-gray-600">{hint}</span>}
      {shortcut && (
        <span className="ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600">
          {shortcut}
        </span>
      )}
    </RadioItem>
  ),
)
DropdownMenuRadioItem.displayName = displayName('DropdownMenuRadioItem')

const DropdownMenuSeparator = forwardRef<React.ComponentRef<typeof Separator>, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <Separator className={cn('-mx-1 my-1 h-px border-t border-gray-200 dark:border-gray-800', className)} ref={ref} {...props} />
  ),
)
DropdownMenuSeparator.displayName = displayName('DropdownMenuSeparator')

const DropdownMenuSubContent = forwardRef<React.ComponentRef<typeof SubContent>, DropdownMenuSubContentProps>(
  ({ className, collisionPadding = 8, ...props }, ref) => (
    <Portal>
      <SubContent
        className={cn(
          `
            relative z-50 max-h-[var(--radix-popper-available-height)] min-w-32 overflow-hidden rounded-md border border-gray-200
            bg-white p-1 text-gray-900 shadow-xl shadow-black/[2.5%] will-change-[transform,opacity]
            dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50
            data-[side=bottom]:animate-slideDownAndFade
            data-[side=left]:animate-slideLeftAndFade
            data-[side=right]:animate-slideRightAndFade
            data-[side=top]:animate-slideUpAndFade
            data-[state=closed]:animate-hide
          `,
          className,
        )}
        collisionPadding={collisionPadding}
        ref={ref}
        {...props}
      />
    </Portal>
  ),
)
DropdownMenuSubContent.displayName = displayName('DropdownMenuSubContent')

const DropdownMenuSubTrigger = forwardRef<React.ComponentRef<typeof SubTrigger>, DropdownMenuSubTriggerProps>(
  ({ children, className, ...props }, ref) => (
    <SubTrigger
      className={cn(
        `
          relative flex cursor-default items-center rounded py-1.5 pr-1 pl-2 text-gray-900 transition-colors outline-none
          select-none
          dark:text-gray-50 dark:data-[disabled]:text-gray-600
          data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none
          data-[state=checked]:font-semibold
          data-[state=open]:bg-gray-100 data-[state=open]:dark:bg-gray-900
          focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900
          hover:bg-gray-100 hover:dark:bg-gray-900
          sm:text-sm
        `,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <IconChevronRight aria-hidden="true" className="ml-auto size-4 shrink-0" />
    </SubTrigger>
  ),
)
DropdownMenuSubTrigger.displayName = displayName('DropdownMenuSubTrigger')

DropdownMenuSub.displayName = displayName('DropdownMenuSub')

DropdownMenuTrigger.displayName = displayName('DropdownMenuTrigger')

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconWrapper,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  type DropdownMenuProps,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuContentProps,
  type DropdownMenuGroupProps,
  type DropdownMenuIconWrapperProps,
  type DropdownMenuItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuRadioGroupProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuSubProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuTriggerProps,
}
