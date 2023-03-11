import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { lightTheme,darkTheme} from "./theme";
const MainLayout = ({ children,mode }) => {
 // Note create RTL Cache
const theme = mode === "dark" ? darkTheme : lightTheme;
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
   
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
     
          {/*Grid System */}
          <Grid
            container
            sx={{
              height: "100vh",
              overflow:"hidden",
            }}
          >
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
