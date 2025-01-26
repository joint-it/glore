'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { type SelectProps } from '@radix-ui/react-select'

import SelectContent from './content'
import SelectGroup from './group'
import SelectItem from './item'
import SelectLabel from './label'
import SelectScrollDown from './scroll-down'
import SelectScrollUp from './scroll-up'
import SelectSeparator from './separator'
import SelectTrigger from './trigger'
import SelectValue from './value'

const Select = (props: SelectProps) => <SelectPrimitive.Root {...props} />
Select.Content = SelectContent
Select.Group = SelectGroup
Select.Item = SelectItem
Select.Label = SelectLabel
Select.ScrollDown = SelectScrollDown
Select.ScrollUp = SelectScrollUp
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue

export default Select
export { type SelectProps }
