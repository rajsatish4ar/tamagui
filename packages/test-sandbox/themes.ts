import { tokens } from './tokens'

export type MyTheme = typeof light
export type MyThemes = typeof themes

const lightColors = Object.fromEntries(
  Object.entries(tokens.color).filter(([k]) => !k.endsWith('Dark'))
)
const darkColors = Object.fromEntries(
  Object.entries(tokens.color)
    .filter(([k]) => k.endsWith('Dark'))
    .map(([k, v]) => [k.replace('Dark', ''), v])
)

const light = {
  bg: '#fff',
  bg2: tokens.color.gray2,
  bg3: tokens.color.gray4,
  bg4: tokens.color.gray6,
  bgTransparent: tokens.color.grayA1,
  borderColor: tokens.color.gray4,
  borderColor2: tokens.color.gray6,
  colorBright: '#000',
  color: tokens.color.gray12,
  color2: tokens.color.gray11,
  color3: tokens.color.gray10,
  color4: tokens.color.gray6,
  shadowColor: tokens.color.grayA6,
  shadowColor2: tokens.color.grayA8,
  separatorColor: tokens.color.grayA8,
  ...lightColors,
}

const dark = {
  bg: '#171717',
  bg2: tokens.color.gray4Dark,
  bg3: tokens.color.gray7Dark,
  bg4: tokens.color.gray9Dark,
  bgTransparent: tokens.color.grayA1Dark,
  borderColor: tokens.color.gray3Dark,
  borderColor2: tokens.color.gray4Dark,
  color: '#fff',
  colorBright: '#fff',
  color2: '#f2f2f2',
  color3: tokens.color.gray10Dark,
  color4: tokens.color.gray6Dark,
  shadowColor: tokens.color.grayA7,
  shadowColor2: tokens.color.grayA9,
  separatorColor: tokens.color.grayA8Dark,
  ...darkColors,
}

export const themes = {
  dark,
  light,
} as const
