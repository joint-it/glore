'use client'

import { useCallback, useMemo, useTransition } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { useLocale } from '@/hooks/use-locale'
import { type Locale } from '@/services/i18n'
import { cn } from '@/theme/utils'
import { locales } from 'config/i18n.json'

interface LocaleSwitcherProps {}

const items = Object.entries(locales).map(([value, { flag, name }]) => ({
  label: name,
  value,
  icon: flag,
}))

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const [locale, setLocale] = useLocale()
  const [isPending, startTransition] = useTransition()

  const activeItem = useMemo(() => items.find(item => item.value === locale), [locale])

  const onChange = useCallback(
    (locale: Locale) => {
      startTransition(async () => {
        await setLocale(locale)
      })
    },
    [setLocale],
  )

  return (
    <Select defaultValue={locale} onValueChange={onChange} {...props}>
      <SelectTrigger className={cn('w-md', isPending && 'pointer-events-none opacity-60')}>
        <span>
          {activeItem?.label} {activeItem?.icon}
        </span>
      </SelectTrigger>
      <SelectContent align="end" position="popper">
        {items.map(item => (
          <SelectItem
            className={cn(item.value === activeItem?.value && 'pointer-events-none cursor-default bg-accent')}
            key={item.value}
            value={item.value}
          >
            <span>{item.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { LocaleSwitcher, type LocaleSwitcherProps }
