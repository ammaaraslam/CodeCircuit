// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
import CodeCircuitLogoLight from '../images/CodeCircuitLogoLight.png'
import CodeCircuitLogoDark from '../images/CodeCircuitLogoDark.png'

const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  white: '#ffffff',
  yellow: '#ffdc4e',
  lightYellow: '#f9e892',
  blueGreyed: '#546c77',
  darkBlue: '#022a4b',
  beige: '#fff9d9',
  red: '#ff0000',
  primaryColor: '#004a8f',
  lighterPrimaryColor: '#90c9ff',
  secondaryColor: '#28d79a',
  lighterSecondaryColor: '#bef2e0',
  lightColor: '#f3f9ff',
  darkerLightColor: '#e8f4ff',
  lighterLightColor: '#ffffff',
  darkColor: '#000e1c',
  darkerDarkColor: '#000204',
  lighterDarkColor: '#00152b',

  gatsbyColor: '#452475',
  reactColor: '#61dafb',
  pythonColor: '#1d405d',
  jsColor: '#efd81d',
  htmlColor: '#dd4b25',
  cssColor: '#254bdd',
  djangoColor: '#092d1f',
  flaskColor:'#000',
  nodejsColor: '#6aa05c',
  flutterColor: '#47d1fd',
  graphqlColor: '#d932a2',
  netlifyColor: '#2eb2b0',
  gitColor: '#e94e31',
  sassColor: '#c76494',
  githubColor: '#1b1f23',
  lightLogo: CodeCircuitLogoDark,
  darkLogo: CodeCircuitLogoLight,


}

export const COLORS = {
  ...colors,
  linkColorChange: {
    light: colors.primaryColor,
    dark: colors.secondaryColor,
  },
  linkColorChangeInverted: {
    light: colors.secondaryColor,
    dark: colors.primaryColor,
  },
  highlightColorChange: {
    light: colors.lighterSecondaryColor,
    dark: colors.lighterPrimaryColor,
  },
  primaryBackground: {
    light: colors.lightColor,
    dark: colors.darkColor,
  },
  primaryBackgroundInverted: {
    light: colors.darkColor,
    dark: colors.lightColor,
  },
  invertedBackground: {
    light: colors.lighterDarkColor,
    dark: colors.lighterLightColor,
  },
  darkerBackground: {
    light: colors.darkerLightColor,
    dark: colors.darkerDarkColor,
  },
  lighterBackground: {
    light: colors.lighterLightColor,
    dark: colors.lighterDarkColor,
  },
  primaryText: {
    light: colors.darkerDarkColor,
    dark: colors.lighterLightColor,
  },
  textInverted: {
    light: colors.lighterLightColor,
    dark: colors.lighterDarkColor,
  },
  secondaryText: {
    light: colors.lighterDarkColor,
    dark: colors.darkerLightColor,
  },
  primaryScrollbar: {
    light: colors.lightColor,
    dark: colors.darkColor,
  },
  secondaryScrollbar: {
    light: colors.lightColor,
    dark: colors.darkColor,
  },
  siteBackground: {
    light: '#f4f8fb',
    dark: colors.grey500,
  },
  wrapperBackground: {
    light: colors.white,
    dark: colors.grey500,
  },
  secondaryContentBackground: {
    light: '#f7f7f7',
    dark: '#3a3a3a',
  },
  wrapperShadow: {
    light: '#0000001a',
    dark: '#00000000',
  },
  primary: {
    light: colors.grey500,
    dark: colors.grey500,
  },
  primaryAlpha: {
    light: 'rgba(32, 35, 42, 0.85)',
    dark: 'rgba(32, 35, 42, 0.85)',
  },
  secondary: {
    light: colors.yellow,
    dark: colors.yellow,
  },
  h2: {
    light: colors.grey500,
    dark: colors.yellow,
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
