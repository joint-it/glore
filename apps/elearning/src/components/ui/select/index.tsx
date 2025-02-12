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
  type SelectScrollDownButtonProps,
  type SelectScrollUpButtonProps,
  type SelectSeparatorProps,
  type SelectTriggerProps,
} from '@radix-ui/react-select'

import { IconCheck, IconChevronDown, IconChevronUp, type IconComponent, type IconProps } from '@/components/ui/icon'
import { type Sizing } from '@/theme/enums'
import { type VariantProps } from '@/theme/types'
import { cx } from 'styled-system/css'

import { selectContent, selectIcon, selectItem, selectLabel, selectScroll, selectSeparator, selectTrigger } from './_styles'

const SelectContent = forwardRef<React.ComponentRef<typeof Content>, SelectContentProps & VariantProps<typeof selectContent>>(
  ({ children, className, position = 'popper', ...props }, ref) => {
    const styles = useMemo(() => selectContent({ position }), [position])

    return (
      <Portal>
        <Content className={cx(styles.root, className)} position={position || undefined} ref={ref} {...props}>
          <SelectScrollUp />
          <Viewport className={styles.viewport}>{children}</Viewport>
          <SelectScrollUp />
        </Content>
      </Portal>
    )
  },
)

const SelectIcon = forwardRef<
  React.ComponentRef<IconComponent>,
  IconProps &
    VariantProps<typeof selectIcon> & {
      icon: IconComponent
    }
>(({ className, icon: IconComponent, size, ...props }, ref) => {
  const styles = useMemo(() => selectIcon({ size }), [size])

  return <IconComponent className={cx(styles, className)} ref={ref} {...props} />
})

const SelectItem = (props: SelectItemProps) => {
  const { children, className, ...rest } = props

  return (
    <Item className={cx(selectItem, className)} {...rest}>
      <ItemIndicator>
        <IconCheck />
      </ItemIndicator>
      <ItemText>{children}</ItemText>
    </Item>
  )
}

const SelectLabel = forwardRef<React.ComponentRef<typeof Label>, SelectLabelProps>(({ className, ...props }, ref) => (
  <Label className={cx(selectLabel, className)} ref={ref} {...props} />
))

const SelectSeparator = forwardRef<React.ComponentRef<typeof Separator>, SelectSeparatorProps>(({ className, ...props }, ref) => (
  <Separator className={cx(selectSeparator, className)} ref={ref} {...props} />
))

const SelectScrollDown = forwardRef<
  React.ComponentRef<typeof ScrollDownButton>,
  SelectScrollDownButtonProps & {
    icon?: IconComponent
    size?: Sizing
  }
>(({ className, icon = IconChevronDown, size, ...props }, ref) => (
  <ScrollDownButton className={cx(selectScroll, className)} ref={ref} {...props}>
    <SelectIcon icon={icon} size={size} />
  </ScrollDownButton>
))

const SelectScrollUp = forwardRef<
  React.ComponentRef<typeof ScrollUpButton>,
  SelectScrollUpButtonProps & {
    icon?: IconComponent
    size?: Sizing
  }
>(({ className, icon = IconChevronUp, size, ...props }, ref) => (
  <ScrollUpButton className={cx(selectScroll, className)} ref={ref} {...props}>
    <SelectIcon icon={icon} size={size} />
  </ScrollUpButton>
))

const SelectTrigger = forwardRef<
  React.ComponentRef<typeof Trigger>,
  SelectTriggerProps & {
    icon?: IconComponent
    size?: Sizing
  }
>(({ children, className, icon = IconChevronDown, size, ...props }, ref) => {
  return (
    <Trigger className={cx(selectTrigger, className)} ref={ref} {...props}>
      {children}
      <Icon asChild>
        <SelectIcon className="opacity-50" icon={icon} size={size} />
      </Icon>
    </Trigger>
  )
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
}
