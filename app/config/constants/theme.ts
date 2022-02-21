import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#42C6A5",     // Green
    primary2: "#FBB344",    // Orange
    primary3: "#33354E",    // Dark Blue
    secondary: "#FC2626",   // Red
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",

    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",

    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Black",  },
    heading: { fontFamily: "Roboto-Black",  },
    body: { fontFamily: "Roboto-Regular",  },
    
};

export const darkTheme = {
    name: "dark",
    backgroundwhiteNgray8: COLORS.gray85,
    backgroundblueNgray9: COLORS.gray90,
    backgroundwhite1Ngray9: COLORS.gray90,
    backgroundwhiteNgreen: COLORS.primary,
    backgroundwhite3Ngray8: COLORS.gray85,
    backgroundblueNblack: COLORS.black,
    backgroundwhiteNgray9: COLORS.gray90,
    backgroundgray10Ngray70: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textblackNwhite: COLORS.white,
    textgreenNwhite: COLORS.white,
    textgray8Ngray4: COLORS.gray40,
    textwhite: COLORS.white,
    textblackNgray: COLORS.gray20,
    textblackNgray3: COLORS.gray30,
    textblackNgray4: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundwhiteNgray8: COLORS.white,
    backgroundblueNgray9: COLORS.primary3,
    backgroundwhite1Ngray9: COLORS.additionalColor11,
    backgroundwhiteNgreen: COLORS.white,
    backgroundwhite3Ngray8: COLORS.additionalColor13,
    backgroundblueNblack: COLORS.primary3,
    backgroundwhiteNgray9: COLORS.white,
    backgroundgray10Ngray70: COLORS.gray10,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textblackNwhite: COLORS.black,
    textgreenNwhite: COLORS.primary,
    textgray8Ngray4: COLORS.gray80,
    textwhite: COLORS.white,
    textblackNgray: COLORS.black,
    textblackNgray3: COLORS.gray30,
    textblackNgray4: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}


export let selectedTheme = lightTheme

export const changeTheme=()=>{
    if (selectedTheme.name=="light"){
        selectedTheme=darkTheme
    }else{
        selectedTheme=lightTheme
    }
}



const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
