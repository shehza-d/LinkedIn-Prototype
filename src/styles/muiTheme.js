import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    // #1A5CB0
  typography: {
    fontFamily: [
      "Outfit",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
