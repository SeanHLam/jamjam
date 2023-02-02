import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
 palette: {
    primary: {
        light: '#F3F3F0',
        main: '#DD727F',
        sand: '#ECEDE8',
        contrastText: '#fff',
      },
    sand: {
      main: '#ECEDE8',
    },
    dark: {
      main: '#29252D',
      contrastText:'#ECEDE8'
    }
 },
 typography: {
  header: {
    fontSize: '28px',
    fontFamily: "Righteous",
  },
  headerSmall: {
    fontSize: '18px',
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
    fontSize: '14px',
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
},

components:{
  MuiButton: {
    variants: [
      {
        props: {
          size: "extraSmall"
        },
        style: {
          fontSize: 14,
          padding: "0.375em 1em",
          borderRadius: '10px',
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          fontSize: 19,
          padding: "0.5em 1.25em",
          borderRadius: '10px',
        }
      },
      {
        props: {
          size: "medium"
        },
        style: {
          fontSize: 24,
          padding: "0.625em 1.5em",
          borderRadius: '10px',
        }
      }
    ]
  }
}
});