/**
 * hero.jpg
Mako
#42464C

Regent Gray
#939FA9

Bud
#ADAFAB

Edward
#A3B4B4
 */

/**
 * hero-pano.jpg 
Woodsmoke
#0F1113

Abbey
#4E5356

Willow Grove
#60645D

Flint
#706B62
 */

const themeBase = {
  fontSizes: [
    '14px', // 0
    '16px', // 1
    '18px', // 2
    '22px', // 3
    '26px', // 4
    '32px', // 5
    '40px'  // 6
  ],
  fontWeights: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  // ...
};

const _defaultTheme = {
  bg: {
    base: '#0F1113',
    gray: '#4E5356',
    green: '#60645D',
  },
  text: {
    primary: 'hotpink',
  }
}

export const defaultTheme = { ...themeBase, ..._defaultTheme };