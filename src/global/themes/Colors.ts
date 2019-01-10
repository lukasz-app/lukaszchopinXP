// DISSCUSS:
// Splitting colors into separate objects.
// base for debugging really, appColors for custom projects colors, and defaults
// NOTE: discuss : many things
const baseColors = {
  transparent: '#00000000',
  white: '#ffffff',
  black: '#000000',
  red: '#ff0000',
  cyan: '#00ffff',
  blue: '#0000ff',
  yellow: '#ffff00',
  green: '#00ff00',
  pink: '#ff00ff',
};
const appColors = {
  richBlack: '#01131A',
  nicel: '#6B6E72',
  seaBlue: '#05668D',
  queenBlue: '#427AA1',
  anitFlashWhite: '#EBF2FA',
  white: '#FBFCFE',
  maxGreen: '#679436',
  limerick: '#A5BE00',
};
const defaults = {
  NAVY: '#001f3f',
  BLUE: '#0074D9',
  AQUA: '#7FDBFF',
  TEAL: '#39CCCC',
  OLIVE: '#3D9970',
  GREEN: '#2ECC40',
  LIME: '#01FF70',
  YELLOW: '#FFDC00',
  ORANGE: '#FF851B',
  RED: '#FF4136',
  MAROON: '#85144b',
  FUCHSIA: '#F012BE',
  PURPLE: '#B10DC9',
  BLACK: '#111111',
  GRAY: '#AAAAAA',
  SILVER: '#DDDDDD',
  WHITE: '#FFFFFF',
};
const colors = { baseColors, appColors, defaults };

export default colors;
