import { createTheme, Theme as MuiTheme } from "@mui/material/styles";

type ExtendedThemeOptions = {
  include: { [key: string]: any };
  design: {
    font: { [key: string]: any };
    ayo: { [key: string]: string };
  };
};

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedThemeOptions {}

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends ExtendedThemeOptions {}
}

export type BaseTheme = MuiTheme & ExtendedThemeOptions;

export const baseColors = {
  dangerColor: "#FF0000",
  successColor: "#0A7227",
  greyColor: "#808080",
  whiteColor: "#FFFFFF",
};

export const theme: any = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Poppins, sans-serif"].join(","),
    fontSize: 12,
    fontWeightBold: "bold",
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h3: {},
    h4: {},
    h5: {
      fontSize: ".8rem",
      fontWeight: 500,
    },
    h6: {},
  },
  styles: {
    maxWidth: 1294,
    tabMaxWidth: 700,
  },
  palette: {
    primary: {
      light: "#59598E",
      main: "#38385F",
      dark: "#2E2E48",
      contrastText: "#fff",
    },
  },
  include: {
    "@keyframes gradient": {
      from: { width: 0 },
      to: { width: "100%" },
    },
    styles: {
      template2: {
        maxWidth: 1294,
        maxWidthMd: 700,
      },
      templates: {
        maxWidth: 1440,
      },
      template4: {
        font: "Nunito",
      },
    },
  },
  design: {
    font: {
      garamond: "Cormorant Garamond, san-serif",
      lato: "Lato, sans-serif",
      cookie: "Cookie, cursive;",
      raleway: "Raleway, sans-serif",
      dmSans: "DM Sans, sans-serif",
      nunitoSans: "Nunito Sans, sans-serif",
      inter: "Inter, sans-serif",
      bitter: "Bitter, sans-serif",
      merriweather: "Merriweather, sans-serif",
      openSans: "Open Sans, sans-serif",
    },
    yende: {},
    ayo: {
      waz_primaryColor100: "#0A7227",
      waz_primaryColor700: "#549C68",
      waz_dangerColor: baseColors.dangerColor,
      waz_dangerColor100: "#990000",
      waz_dangerColor200: "#ff3333",
      waz_dangerColor300: "#ff5959",
      waz_dangerColor400: "#FF4C4C",
      waz_successColor: baseColors.successColor,
      waz_successColor100: "#22803c",
      waz_successColor200: "#3b8e52",
      waz_successColor300: "#e6f0e9",
      waz_greyColor: "#808080",
      waz_greyColor100: "#e5e5e5",
      waz_greyColor200: "#8c8c8c",
      waz_greyColor300: "#666666",
      waz_greyColor400: "#333333",
      waz_greyColor500: "#ADADAD",
      waz_white: "#FFFFFF",
      waz_whiteAlpha: "#f9f9f9",
      waz_whiteAlpha100: "#F0F0F0",
      waz_black: "#010E05",
      waz_Grey: "#414141",
      waz_gray: "#BEBEBE",
      waz_blue: "#0889F7",
      waz_blue200: "#2F80ED",
      waz_grey: "#3A3335",
      waz_yellowsea: "#F5A53C",
      waz_greenishGrey: "#999F9B",
      waz_greenishGrey2: "#4D5650",
      waz_grey5: "#E6E7E6",
      waz_grey1: "#343E37",
      waz_mercury: "#CCCFCD",
      waz_primaryBlack: "#010E05",
      waz_grey6: "#FBFBFB",
      waz_grey50: "#EEEEEE",
      waz_grey100: "#808782",
      waz_grey200: "#999F9B",
      waz_grey300: "#E8E8E8",
      waz_grey400: "#4D5650",
      waz_grey500: "#1A261E",
      waz_grey600: "#676E69",
      waz_grey700: " #9B9B9B",
      waz_orange: "#F4CDB4",
      waz_gold: "#CBA735",
      waz_brown: "#A54227",
      waz_red: "#C23434",
      waz_peach: "#FAF8F7",
      waz_button: "#10b092",
      ayo_gray: "#313536",
      ayo_green: "#00E472",
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 64,
        lineHeight: "75.14px",
      },
      h2: {
        fontSize: 40,
        lineHeight: "46.96px",
      },
      h3: {
        fontSize: 32,
        lineHeight: "37.57px",
      },
      h4: {
        fontSize: 24,
        lineHeight: "28.18px",
        fontWeight: 700,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiChip: {
      root: {
        width: "auto",
      },
    },
    MuiOutlinedInput: {
      root: {
        minHeight: 40,
        position: "relative",
        "& $notchedOutline": {
          borderColor: "rgba(0, 0, 0, 0.23)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#4A90E2",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "rgba(255, 0, 0, 0.2)",
          boxSizing: "border-box",
          boxShadow: "0px 0px 8px rgba(255, 0, 0, 0.2)",
        },
      },
      input: {
        padding: "8px 12px",
        minHeight: 40,
        fontSize: ".9rem",
        lineHeight: "13pt",
        boxSizing: "border-box",
      },
      notchedOutline: {
        borderWidth: 0.3,
        borderStyle: "solid",
        borderColor: "#ADADAD",
        transition: "border-color box-shadow .3s",
      },
    },
  },
};

export default createTheme(theme);
