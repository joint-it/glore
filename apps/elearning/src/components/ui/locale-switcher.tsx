'use client'

import { useCallback, useMemo } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, type SelectProps } from '@/components/ui/select'
import { useLocale } from '@/hooks/use-locale'
import { type Locale } from '@/services/i18n'
import { locales } from 'config/i18n.json'
import { cx, sva } from 'styled-system/css'

const items = Object.entries(locales).map(([value, { flag, name }]) => ({
  label: name,
  value,
  icon: flag,
}))

interface LocaleSwitcherProps extends SelectProps {}

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const [locale, setLocale] = useLocale()

  const activeItem = useMemo(() => items.find(item => item.value === locale), [locale])
  const styles = useMemo(() => localeSwitcher(), [])

  const onChange = useCallback(
    (locale: Locale) => {
      setLocale(locale)
    },
    [setLocale],
  )

  return (
    <Select defaultValue={locale} onValueChange={onChange} {...props}>
      <SelectTrigger className={cx(styles.trigger)}>
        <span>
          {activeItem?.label} {activeItem?.icon}
        </span>
      </SelectTrigger>
      <SelectContent align="end" className={styles.content} position="popper">
        {items.map(item => (
          <SelectItem className={styles.item} key={item.value} value={item.value}>
            <span className="text-slate-900">{item.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const localeSwitcher = sva({
  slots: ['content', 'item', 'trigger'],
  base: {
    content: {
      minWidth: '[8rem]',
      overflow: 'hidden',
      borderRadius: 'sm',
      background: 'white',
      paddingY: '1',
      shadow: 'md',
    },
    item: {
      display: 'flex',
      cursor: 'default',
      alignItems: 'center',
      color: 'slate.900',
      paddingX: '3',
      paddingY: '2',
      fontSize: 'sm',
      _highlighted: {
        background: 'slate.100',
      },
    },
    trigger: {
      borderRadius: 'sm',
      padding: '2',
      transition: 'colors',
      '&:hover': {
        background: 'slate.200',
      },
    },
  },
})

export { LocaleSwitcher, type LocaleSwitcherProps }
