import "../styles/globals.css";
import "../styles/variables.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { styles } from "../utils/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}) {
 return (
  <ThemeProvider theme={theme}>
   <CacheProvider value={emotionCache}>
       <Component {...pageProps} />

   </CacheProvider>
   </ThemeProvider>
 );
}

export default MyApp;