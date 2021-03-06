import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
//import registerServiceWorker from "./registerServiceWorker"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import "typeface-arimo"
import { I18nextProvider } from "react-i18next"
import i18n from "./utils/i18n"
import { create } from "jss"
import preset from "jss-preset-default"
import { JssProvider } from "react-jss"

const oakland = {
  50: "#f1eee9",
  100: "#dbd4c8",
  200: "#c3b8a4",
  300: "#ab9c7f",
  400: "#b89f74",
  500: "#877148",
  600: "#7f6941",
  700: "#745e38",
  800: "#6a5430",
  900: "#574221",
  A100: "#0074b7",
  A200: "#0074b7",
  A400: "#0074b7",
  A700: "#0074b7",
  contrastDefaultColor: "light"
}

const oaklandAccent = {
  50: "#eo33f6",
  100: "#b3d5e9",
  200: "#80badb",
  300: "#4d9ecd",
  400: "#2689c2",
  500: "#007467",
  600: "#006c60",
  700: "#0061a7",
  800: "#00579f",
  900: "#004490",
  A100: "#bcd6ff",
  A200: "#0074b7",
  A400: "#5699ff",
  A700: "#3c8aff",
  contrastDefaultColor: "light"
}

const palette = {
  type: "light",
  secondary: oaklandAccent,
  primary: oakland
}

const theme = createMuiTheme({
  palette: palette,
  typography: {
    fontFamily: "Arimo"
  }
})

const rootElement = "root"
const jss = create(preset())

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <JssProvider jss={jss}>
      <MuiThemeProvider theme={theme} jss={jss}>
        <App rootElement={rootElement} />
      </MuiThemeProvider>
    </JssProvider>
  </I18nextProvider>,
  document.getElementById(rootElement)
)
//registerServiceWorker()
