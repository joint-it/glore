import { cva } from 'class-variance-authority'

export const flexVariants = cva(['flex'], {
  variants: {
    align: {
      baseline: ['items-baseline'],
      center: ['items-center'],
      end: ['items-end'],
      start: ['items-start'],
      stretch: ['items-stretch'],
    },
    center: {
      true: ['items-center', 'justify-center'],
    },
    direction: {
      col: ['flex-col'],
      'col-reverse': ['flex-col-reverse'],
      row: ['flex-row'],
      'row-reverse': ['flex-row-reverse'],
    },
    grow: {
      false: ['grow-0'],
      true: ['grow'],
    },
    justify: {
      around: ['justify-around'],
      between: ['justify-between'],
      center: ['justify-center'],
      evenly: ['justify-evenly'],
      normal: ['justify-normal'],
      start: ['justify-start'],
      stretch: ['justify-stretch'],
    },
  },
})
