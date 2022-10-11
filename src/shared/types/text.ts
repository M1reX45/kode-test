import { theme } from '~ui/theme'

export type TextColor = keyof typeof theme.colors.text

export type TextType = keyof typeof theme.text

export type TextWeight = keyof typeof theme.text.body.fontWeight
