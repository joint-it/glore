import { type Styles } from '@/lib/theme'

import { displayName } from '@/lib/utils'
import { css, cx } from 'styled-system/css'

interface DropdownMenuIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

const DropdownMenuIcon = (props: DropdownMenuIconProps) => {
  const { className, ...rest } = props
  return <div className={cx(styles, className)} {...rest} />
}
DropdownMenuIcon.displayName = displayName('DropdownMenuIcon')

const dropdownMenuIcon: Styles = {
  color: {
    base: 'gray.600',
    __dark: 'gray.400',
  },
  // 'group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700',
}
const styles = css(dropdownMenuIcon)

export { DropdownMenuIcon, dropdownMenuIcon, type DropdownMenuIconProps }
