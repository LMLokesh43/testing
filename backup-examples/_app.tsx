import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button>
    </MuiThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);