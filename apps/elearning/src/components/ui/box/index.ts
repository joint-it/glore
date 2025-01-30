import { Div, type DivProps } from './div'
import { Flex, type FlexProps } from './flex'
import { Grid, type GridProps } from './grid'

export namespace BoxProps {
  export interface Div extends DivProps {}
  export interface Flex extends FlexProps {}
  export interface Grid extends GridProps {}
}

export const box = {
  div: Div,
  flex: Flex,
  grid: Grid,
}
