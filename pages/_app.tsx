import React, { FC, useEffect, useState } from 'react'
import { AppProps } from 'next/app';
import { wrapper} from 'store/store'
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {defaultColors} from "assets/defaultColors"

// import theme from 'jss/theme'
const CustomApp: FC<AppProps> = ({ Component, pageProps }) =>{
  const [theme, setTheme] = useState();
    useEffect(()=>{
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement!.removeChild(jssStyles);
      }
      
    })
  useEffect(() => {
    let createTheme = createMuiTheme({
      palette: {
        primary: {
          main: defaultColors.primary
        },
        secondary: {
          main: defaultColors.secondary
        },
        type: "light"
      },
      ...defaultColors
    });
    createTheme = responsiveFontSizes(createTheme)
    setTheme(createTheme)
  },[])
  
  
      return (
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
      )
  }

export default wrapper.withRedux(CustomApp);