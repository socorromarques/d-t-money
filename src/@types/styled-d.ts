import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme & {
  newProperty: string
}

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {
        // Add new members here, for example:
        customProperty: string;}}