import { forwardRef } from 'react'

interface ListProps extends React.ComponentProps<'ul'> {}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => <ul ref={ref} {...props} />)

interface ListItemProps extends React.ComponentProps<'li'> {}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => <li ref={ref} {...props} />)

export { List, ListItem, type ListProps, type ListItemProps }
