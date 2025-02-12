import { forwardRef } from 'react'

import { css, cx } from 'styled-system/css'

interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ children, className, ...props }, ref) => (
  <div className={cx(styles.root, className)} ref={ref} {...props}>
    {children ? (
      <>
        <div className={styles.line} />
        <div className={styles.content}>{children}</div>
        <div className={styles.line} />
      </>
    ) : (
      <div className={styles.line} />
    )}
  </div>
))

const styles = {
  root: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3',
    fontSize: 'sm',
    color: 'gray.500',
    width: 'full',
    mx: 'auto',
  }),
  content: css({
    whiteSpace: 'nowrap',
  }),
  line: css({
    height: '[1px]',
    width: 'full',
    bg: 'gray.200',
    __dark: {
      bg: 'gray.800',
    },
  }),
}

export { Divider, type DividerProps }
