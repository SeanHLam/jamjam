import { createTheme} from "@mui/material/styles";

export let theme = createTheme({

  
 palette: {
    primary: {
        light: '#F3F3F0',
        main: '#DD727F',
        sand: '#f3f3f0',
        contrastText: '#fff',
      },
    sand: {
      main: '#f3f3f0',
    },
    dark: {
      main: '#29252D',
      contrastText:'#f3f3f0'
    },
 },
 breakpoints: {
  values: {
    xs: 0,    // Extra small devices (portrait phones)
    sm: 600,  // Small devices (landscape phones, 7" tablets)
    md: 960,  // Medium devices (10" tablets, small laptops)
    lg: 1280, // Large devices (laptops and desktops)
    xl: 1920, // Extra large devices (large desktops)
  },
},

 typography: {
  header: {
    fontSize: '2rem',
    fontFamily: "Righteous",
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '3rem',
    // },
  },
  headerSmall: {
    fontSize: '1.6rem',
    fontFamily: "Righteous",
  },
  landing: {
    fontSize: '4rem',
    fontFamily: 'Sarabun',
    fontWeight:'800',
    letterSpacing: '-0.05rem',
  },
  landingsub: {
    fontSize: '1.5rem',
    fontFamily: 'Sarabun',
    fontWeight:'600',
    letterSpacing: '0.1rem',
  },
  bodyLarge: {
    fontSize: '1.8rem',
    fontFamily: "Sarabun",
  },
  bodyMedium: {
    fontSize: '1.6rem',
    fontFamily: "Sarabun",
  },
  bodySmall: {
    fontSize: '1.2rem',
    fontFamily: "Sarabun",
  },
  bodyExtraSmall: {
    fontSize: '1.1rem',
    fontFamily: "Sarabun",
  },
  pill: {
    fontSize: '1rem', 
    fontFamily: "Righteous",
  },
  buttonLarge: {
    fontSize: '1.5rem',
    fontFamily: "Righteous",
  },
  buttonMedium: {
    fontSize: '1.4rem',
    fontFamily: "Righteous",
  },
  buttonSmall: {
    fontSize: '1.2rem',
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

// components:{
//   MuiButton: {
//     variants: [
//       {
//         props: {
//           size: "extraSmall"
//         },
//         style: {
//           fontSize: 14,
//           padding: "0.25em 3em",
//           borderRadius: '10px',
//           width:'8em',
//           maxWidth:'100%'
//         }
//       },
//       {
//         props: {
//           size: "small"
//         },
//         style: {
//           fontSize: 16,
//           padding: "0.5em 4em",
//           borderRadius: '10px',
          
//         }
//       },
//       {
//         props: {
//           size: "medium"
//         },
//         style: {
//           fontSize: 24,
//           padding: "0.625em 1.5em",
//           borderRadius: '10px',
//         }
//       }
//     ]
//   }
// },

});



theme = createTheme(theme, {
  breakpoints: {
    values: {
      xs: 0,    // Extra small devices (portrait phones)
      sm: 600,  // Small devices (landscape phones, 7" tablets)
      md: 800,  // Medium devices (10" tablets, small laptops)
      lg: 1280, // Large devices (laptops and desktops)
      // xl: 1920, // Extra large devices (large desktops)
    },
  },

  typography: {
    header: {
      [theme.breakpoints.between("0", "sm")]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: '1.75rem',
      },
    },
    landing: {
      [theme.breakpoints.between("0", "sm")]: {
        fontSize: '2.5rem',
        lineHeight:'1'
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: '3rem',
      },
    },
  },
});