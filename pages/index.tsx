import React from "react";
// nodejs library that concatenates classes
import { NextPage} from "next"
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Button } from "@material-ui/core"
// core components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";

import styles from "assets/jss/pages/indexPageStyles";

// Sections for this page
// import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
// import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
// import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Index: NextPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="EIMS Institution Name"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image={require("assets/images/landing-bg.jpeg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}> Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description
                                after the big bold title, that{"'"}s why we
added this text here. Add here all the
information that can make you or your product
create the first impression.
                            </h4>
              <br />
              <Button
                color="secondary"
                size="medium"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
                            </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection />
                    <TeamSection />
                    <WorkSection /> */}
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
          how this is passed along in the renderFullPage function.
                </div>
        <div>
          The first thing that we need to do on every request is
          create a new ServerStyleSheets. When rendering, we will wrap
          App, the root component, inside a StylesProvider and
          ThemeProvider to make the style configuration and the theme
          available to all components in the component tree. The key
          step in server-side rendering is to render the initial HTML
          of the component before we send it to the client side. To do
          this, we use ReactDOMServer.renderToString(). We then get
          the CSS from the sheets using sheets.toString(). We will see
                    how this is passed along in the renderFullPage{" "}
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          <div>
            The first thing that we need to do on every request is
            create a new ServerStyleSheets. When rendering, we will
            wrap App, the root component, inside a StylesProvider
            and ThemeProvider to make the style configuration and
            the theme available to all components in the component
            tree. The key step in server-side rendering is to render
            the initial HTML of the component before we send it to
            the client side. To do this, we use
            ReactDOMServer.renderToString(). We then get the CSS
            from the sheets using sheets.toString(). We will see how
            this is passed along in the renderFullPage function.
                    </div>
          function.
                </div>
      </div>
      <Footer />
    </div>
  );
}


export default Index;