import { cloneElement, forwardRef } from 'react'

import { Group, InputElement, type BoxProps, type InputElementProps } from '@chakra-ui/react'

import { normalizeSpacing } from '@/lib/utils'

export interface InputGroupProps extends BoxProps {
  startElementProps?: InputElementProps
  endElementProps?: InputElementProps
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  children: React.ReactElement
  startOffset?: InputElementProps['paddingStart']
  endOffset?: InputElementProps['paddingEnd']
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>((props, ref) => {
  const {
    startElement,
    startElementProps,
    endElement,
    endElementProps,
    children,
    startOffset = '6px',
    endOffset = '6px',
    ...rest
  } = props

  return (
    <Group ref={ref} {...rest}>
      {startElement && (
        <InputElement pointerEvents="none" {...startElementProps}>
          {startElement}
        </InputElement>
      )}
      {cloneElement(children, {
        ...(startElement && {
          ps: `calc(var(--input-height) - ${normalizeSpacing(startOffset)})`,
        }),
        ...(endElement && { pe: `calc(var(--input-height) - ${normalizeSpacing(endOffset)})` }),
        ...(children.props || {}),
      })}
      {endElement && (
        <InputElement placement="end" {...endElementProps}>
          {endElement}
        </InputElement>
      )}
    </Group>
  )
})
