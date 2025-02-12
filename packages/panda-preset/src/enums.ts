export enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export const ColorShade = {
  50: '50',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
} as const

export enum LayoutColor {
  Background = 'background',
  Text = 'text',
}

export enum LayoutShade {
  Muted = 'muted',
  Dark = 'dark',
}

export enum SemanticColor {
  Base = 'base',
  Primary = 'primary',
  Secondary = 'secondary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export enum SemanticShade {
  Lightest = 'lightest',
  Lighter = 'lighter',
  Light = 'light',
  Dark = 'dark',
  Darker = 'darker',
  Darkest = 'darkest',
}

export const Spacing = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
} as const

export const SpacingExtended = {
  ...Spacing,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  72: 72,
  80: 80,
  96: 96,
} as const

export enum Sizing {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

export enum SizingExtended {
  Xxs = '2xs',
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  Xxl = '2xl',
  Xxxl = '3xl',
  Xxxxl = '4xl',
  Xxxxxl = '5xl',
  Xxxxxxl = '6xl',
  Xxxxxxxl = '7xl',
  Xxxxxxxxl = '8xl',
  Xxxxxxxxxl = '9xl',
  Prose = 'prose',
  Full = 'full',
  Min = 'min',
  Max = 'max',
  Base = 'base',
  Fit = 'fit',
}
