import Div, { type DivProps as DivPropsInterface } from './div'
import Flex, { type FlexProps as FlexPropsInterface } from './flex'
import Grid, { type GridProps as GridPropsInterface } from './grid'

export namespace Box {
  export interface DivProps extends DivPropsInterface {}
  export interface FlexProps extends FlexPropsInterface {}
  export interface GridProps extends GridPropsInterface {}
}

const box = () => {}
box.div = Div
box.flex = Flex
box.grid = Grid
export default box
