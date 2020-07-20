


//DEVICES
const devices = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`,
  desktopL: `(min-width: 2560px)`,
}

//COLORS
const colors = {
  thmBlack: "#0F0F0F",
  thmWhite: "#F8F9F8",
  thmBlackShadowLight: "#141414",
  thmBlackShadowDark: "#0A0A0A",
  thmWhiteShadowLight: "#FFFFFF",
  thmWhiteShadowDark: "#F2F2F1",
  thmWhiteBorder: "rgba(242,242,241,0.25)",
  thmBlackBorder: "rgba(15,15,15,0.25)",
}

//FONTS
const fonts = {
  //Font
  displayFnt: 'Space Mono',
  fntSemiBold: 'Graphik-Semibold',
  fntRegular: 'Graphik-Regular',
  fntItalic: 'Graphik-RegularItalic',
  //Sizes
  fntSz12: "12px",
  fntSz14: "14px",
  //Line Height
  lnHt20: "20px",
}

//WIDTHS & HEIGHTS
const responsiveWidthHeights = {
  w10px: "2.66666667vw",
  w20px: "5.33333333vw",
  w30px: "8vw",
  w800px: "55.5555555556vw",

  h200px: "29.9850075vh",
  h400px: "59.970015vh",
}

//Z-INDEXES
const zIndexes = {
  //Desktop
  leftPanelBg : 100,
  header: 200,
}



export { devices, colors, fonts, responsiveWidthHeights, zIndexes }