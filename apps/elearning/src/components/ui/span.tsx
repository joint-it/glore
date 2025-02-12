import { forwardRef } from 'react'

import { styled } from 'styled-system/jsx'

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Span = styled(forwardRef<HTMLSpanElement, SpanProps>((props, ref) => <span ref={ref} {...props} />))

export { Span, type SpanProps }
