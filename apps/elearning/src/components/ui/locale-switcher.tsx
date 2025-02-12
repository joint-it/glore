'use client'

import { useCallback, useMemo } from 'react'

import { Select, SelectContent, SelectItem, SelectTrigger, type SelectProps } from '@/components/ui/select'
import { useLocale } from '@/hooks/use-locale'
import { type Locale } from '@/services/i18n'
import { locales } from 'config/i18n.json'

const items = Object.entries(locales).map(([value, { flag, name }]) => ({
  label: name,
  value,
  icon: flag,
}))

interface LocaleSwitcherProps extends SelectProps {}

const LocaleSwitcher = (props: LocaleSwitcherProps) => {
  const [locale, setLocale] = useLocale()
  const activeItem = useMemo(() => items.find(item => item.value === locale), [locale])

  const onChange = useCallback(
    (locale: Locale) => {
      setLocale(locale)
    },
    [setLocale],
  )

  return (
    <Select defaultValue={locale} onValueChange={onChange} {...props}>
      <SelectTrigger className="rounded-sm p-2 transition-colors hover:bg-slate-200">
        <span>
          {activeItem?.label} {activeItem?.icon}
        </span>
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[8rem] overflow-hidden rounded-sm bg-accent p-y-1 shadow-md" position="popper">
        {items.map(item => (
          <SelectItem className="flex items-center rounded-sm p-x-3 p-y-2 text-sm" key={item.value} value={item.value}>
            <span className="text-slate-900">{item.label}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export { LocaleSwitcher, type LocaleSwitcherProps }
