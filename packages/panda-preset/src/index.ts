import type { Preset } from '@pandacss/types'

import { name } from 'package.json'

import { conditions } from './conditions'
import { globalCss } from './global-css'
import { breakpoints } from './theme/breakpoints'
import { containerSizes } from './theme/container-sizes'
import { keyframes } from './theme/keyframes'
import * as semanticTokens from './theme/semantic-tokens'
import { textStyles } from './theme/text-styles'
import * as tokens from './theme/tokens'
import * as utilities from './utilities'

const jointPreset: Preset = {
  name,
  conditions,
  globalCss,
  utilities,
  theme: {
    breakpoints,
    containerSizes,
    keyframes,
    semanticTokens,
    textStyles,
    tokens,
  },
}

export default jointPreset
