import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
// import withRedux from 'next-redux-wrapper'
import { wrapper, AppState } from '../store/store'
import { Provider } from 'react-redux'
// import { Store } from 'redux'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'jss/theme'


class CustomApp extends App<AppState> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {

    // ctx.store.dispatch({ type: 'TOE', payload: 'was set in _app' });

    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      },
    };

  };
  public render() {

    console.log(this.props);
    const { Component, pageProps } = this.props;

    return (
      // <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        </ThemeProvider>
      // </Provider>
    );
  }
}

export default wrapper.withRedux(CustomApp);