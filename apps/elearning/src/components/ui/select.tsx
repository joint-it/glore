import { forwardRef, useMemo } from 'react'

import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  ScrollDownButton,
  ScrollUpButton,
  Select,
  Separator,
  Trigger,
  Viewport,
  type SelectContentProps,
  type SelectItemProps,
  type SelectLabelProps,
  type SelectProps,
  type SelectScrollDownButtonProps,
  type SelectScrollUpButtonProps,
  type SelectSeparatorProps,
  type SelectTriggerProps,
} from '@radix-ui/react-select'

import { IconCheck, IconChevronDown, IconChevronUp, type IconComponent, type IconProps } from '@/components/ui/icon'
import { displayName } from '@/lib/utils'
import { type SizingBase } from '@/theme/enums'
import { type VariantProps } from '@/theme/types'
import { cn, cva } from '@/theme/utils'

Select.displayName = displayName('Select')

const SelectContent = forwardRef<React.ComponentRef<typeof Content>, SelectContentProps>(
  ({ children, className, position = 'popper', ...props }, ref) => {
    const content = useMemo(() => selectContent({ position }), [position])
    const viewport = useMemo(() => selectViewport({ position }), [position])

    return (
      <Portal>
        <Content className={cn(content, className)} position={position || undefined} ref={ref} {...props}>
          <SelectScrollUp />
          <Viewport className={viewport}>{children}</Viewport>
          <SelectScrollUp />
        </Content>
      </Portal>
    )
  },
)
SelectContent.displayName = displayName('SelectContent')

interface SelectIconProps extends IconProps, VariantProps<typeof selectIcon> {
  icon: IconComponent
}

const SelectIcon = forwardRef<React.ComponentRef<IconComponent>, SelectIconProps>(
  ({ className, icon: IconBase, size, ...props }, ref) => {
    const styles = useMemo(() => selectIcon({ size }), [size])
    return <IconBase className={cn(styles, className)} ref={ref} {...props} />
  },
)
SelectIcon.displayName = displayName('SelectIcon')

const SelectItem = (props: SelectItemProps) => {
  const { children, className, ...rest } = props
  return (
    <Item
      className={cn(
        `
          relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none
          data-disabled:opacity-50
          disabled:pointer-events-none
          focus:bg-accent focus:text-accent-foreground
        `,
        className,
      )}
      {...rest}
    >
      <ItemIndicator>
        <IconCheck />
      </ItemIndicator>
      <ItemText>{children}</ItemText>
    </Item>
  )
}
SelectItem.displayName = displayName('SelectItem')

const SelectLabel = forwardRef<React.ComponentRef<typeof Label>, SelectLabelProps>(({ className, ...props }, ref) => (
  <Label className={cn('px-2 py-1.5 text-sm font-semibold', className)} ref={ref} {...props} />
))
SelectLabel.displayName = displayName('SelectLabel')

const SelectSeparator = forwardRef<React.ComponentRef<typeof Separator>, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} ref={ref} {...props} />
))
SelectSeparator.displayName = displayName('SelectSeparator')

const SelectScrollDown = forwardRef<
  React.ComponentRef<typeof ScrollDownButton>,
  SelectScrollDownButtonProps & {
    icon?: IconComponent
    size?: SizingBase
  }
>(({ className, icon = IconChevronDown, size, ...props }, ref) => (
  <ScrollDownButton className={cn('flex cursor-default items-center justify-center py-1', className)} ref={ref} {...props}>
    <SelectIcon icon={icon} size={size} />
  </ScrollDownButton>
))
SelectScrollDown.displayName = displayName('SelectScrollDown')

const SelectScrollUp = forwardRef<
  React.ComponentRef<typeof ScrollUpButton>,
  SelectScrollUpButtonProps & {
    icon?: IconComponent
    size?: SizingBase
  }
>(({ className, icon = IconChevronUp, size, ...props }, ref) => (
  <ScrollUpButton className={cn('flex cursor-default items-center justify-center py-1', className)} ref={ref} {...props}>
    <SelectIcon icon={icon} size={size} />
  </ScrollUpButton>
))
SelectScrollUp.displayName = displayName('SelectScrollUp')

const SelectTrigger = forwardRef<
  React.ComponentRef<typeof Trigger>,
  SelectTriggerProps & {
    icon?: IconComponent
    size?: SizingBase
  }
>(({ children, className, icon = IconChevronDown, size, ...props }, ref) => (
  <Trigger
    className={cn(
      `
        flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm
        whitespace-nowrap shadow-xs ring-offset-background
        [&>span]:line-clamp-1
        disabled:cursor-not-allowed disabled:opacity-50
        focus:ring-1 focus:outline-hidden focus:ring-ring
        placeholder:text-muted-foreground
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <Icon asChild>
      <SelectIcon className="opacity-50" icon={icon} size={size} />
    </Icon>
  </Trigger>
))
SelectTrigger.displayName = displayName('SelectTrigger')

const selectContent = cva(
  `
    relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md
    data-[side=bottom]:slide-in-from-top-2
    data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2
    data-[side=top]:slide-in-from-bottom-2
    data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
    data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
  `,
  {
    defaultVariants: {
      position: 'popper',
    },
    variants: {
      position: {
        'item-aligned': null,
        popper: `
          data-[side=bottom]:translate-y-1
          data-[side=left]:-translate-x-1
          data-[side=right]:translate-x-1
          data-[side=top]:-translate-y-1
        `,
      },
    },
  },
)

const selectViewport = cva('p-1', {
  defaultVariants: {
    position: 'popper',
  },
  variants: {
    position: {
      'item-aligned': null,
      popper: `h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]`,
    },
  },
})

const selectIcon = cva([], {
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'h-2 w-2',
      md: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
  },
})

export {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectScrollDown,
  SelectScrollUp,
  SelectSeparator,
  SelectTrigger,
  type SelectProps,
  type SelectContentProps,
  type SelectItemProps,
  type SelectLabelProps,
  type SelectScrollDownButtonProps,
  type SelectScrollUpButtonProps,
  type SelectSeparatorProps,
  type SelectTriggerProps,
}
