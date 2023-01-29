import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 palette: {
    primary: {
        light: '#F3F3F0',
        main: '#DD727F',
        contrastText: '#fff',
      },
 },
 typography: {
  header: {
    fontSize: '28px',
    fontFamily: "Righteous",
  },
  headerSmall: {
    fontSize: '16px',
    fontFamily: "Righteous",
  },
  bodyLarge: {
    fontSize: '20px',
    fontFamily: "Sarabun",
  },
  bodyMedium: {
    fontSize: '16px',
    fontFamily: "Sarabun",
  },
  bodySmall: {
    fontSize: '12px',
    fontFamily: "Sarabun",
  },
  pill: {
    fontSize: '14px',
    fontFamily: "Righteous",
  },
  button: {
    fontSize: '24px',
    fontFamily: "Righteous",
  },
  buttonSmall: {
    fontSize: '16px',
    fontFamily: "Righteous",
  },
}
});