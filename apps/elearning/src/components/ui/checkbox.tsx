import { forwardRef, useCallback, useMemo, type InputHTMLAttributes } from 'react'

import { Label } from '@/components/ui/label'
import { SemanticShade } from '@/theme/enums'
import { semanticVariant } from '@/theme/utils'
import { cx, sva, type RecipeVariant } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>, RecipeVariant<typeof checkbox> {
  label?: React.ReactNode
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, color, id, label, ...props }, ref) => {
  const styles = useMemo(() => checkbox({ color }), [color])

  const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.currentTarget.click()
    }
  }, [])

  const InputBase = useMemo(
    () => <input className={cx(styles.input, className)} id={id} onKeyDown={onKeyDown} ref={ref} {...props} type="checkbox" />,
    [className, id, onKeyDown, props, ref, styles.input],
  )

  return label ? (
    <Flex align="center">
      {InputBase}
      <Label className={styles.label} htmlFor={id}>
        {label}
      </Label>
    </Flex>
  ) : (
    InputBase
  )
})

const checkbox = sva({
  slots: ['input', 'label'],
  base: {
    input: {
      width: '4',
      height: '4',
      background: 'gray.100',
      borderWidth: '1',
      borderColor: 'gray.300',
      outline: 'none',
      shadow: 'ring.1',
      borderRadius: 'sm',
      cursor: 'pointer',
      _focus: {
        shadow: 'ring.2',
      },
      _active: {
        outlineWidth: '1',
        boxShadow: 'none',
      },
    },
    label: {
      marginLeft: '2',
    },
  },
  variants: {
    color: semanticVariant(color => ({
      input: {
        background: color(),
        _focus: {
          shadowColor: color(SemanticShade.Light),
        },
      },
    })),
  },
})

export { Checkbox, type CheckboxProps }
