import { forwardRef, useMemo } from 'react'

import { Input, type InputProps } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { P } from '@/components/ui/p'
import { SemanticColor, Sizing } from '@/theme/enums'
import { type VariantProps } from '@/theme/types'
import { slotVariant } from '@/theme/utils'
import { fullWidth } from '@/theme/variants'
import { cx, sva } from 'styled-system/css'
import { Box } from 'styled-system/jsx'

interface FieldProps extends Omit<InputProps, 'fullWidth'>, VariantProps<typeof field> {
  color?: SemanticColor
  id: string
  label?: React.ReactNode
  message?: React.ReactNode
  size?: Sizing
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ className, color = SemanticColor.Base, fullWidth, id, label, message, size = Sizing.Md, ...props }, ref) => {
    const styles = useMemo(() => field({ fullWidth }), [fullWidth])
    const labelColor = useMemo(() => (['success', 'warning', 'danger'].includes(color) ? color : undefined), [color])

    return (
      <Box className={cx(styles.root, className)}>
        {label && (
          <Label className={styles.label} color={labelColor} htmlFor={id} size={size}>
            {label}
          </Label>
        )}
        <Input color={color} fullWidth={fullWidth} id={id} ref={ref} size={size} {...props} />
        {message && (
          <P className={styles.message} color={labelColor} size={size}>
            {message}
          </P>
        )}
      </Box>
    )
  },
)

const field = sva({
  slots: ['root', 'input', 'label', 'message'],
  base: {
    label: {
      mb: '2',
    },
    message: {
      mt: '1',
    },
  },
  variants: {
    fullWidth: slotVariant(fullWidth, ['root']),
  },
})

export { Field, type FieldProps }
