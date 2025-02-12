import { forwardRef } from 'react'

import { displayName } from '@/lib/utils'

interface ListProps extends React.ComponentProps<'ul'> {}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => <ul ref={ref} {...props} />)
List.displayName = displayName('List')

interface ListItemProps extends React.ComponentProps<'li'> {}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => <li ref={ref} {...props} />)
ListItem.displayName = displayName('ListItem')

export { List, ListItem, type ListProps, type ListItemProps }
