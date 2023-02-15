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
    fontSize: '2.8rem',
    fontFamily: "Righteous",
  },
  headerSmall: {
    fontSize: '1.285rem',
    fontFamily: "Righteous",
  },
  bodyLarge: {
    fontSize: '20px',
    fontFamily: "Sarabun",
  },
  bodyMedium: {
    fontSize: '1.6rem',
    fontFamily: "Sarabun",
  },
  bodySmall: {
    fontSize: '1.4rem',
    fontFamily: "Sarabun",
  },
  pill: {
    fontSize: '1.4rem',
    fontFamily: "Righteous",
  },
  button: {
    fontSize: '2.4rem',
    fontFamily: "Righteous",
  },
  buttonSmall: {
    fontSize: '1.6rem',
    fontFamily: "Righteous",
  },
  navText: {
    fontSize: '12em',
    fontFamily: "Righteous",
  },
  navText: {
    fontSize: '12rem',
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
          backgroundColor:"#DD727F"
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