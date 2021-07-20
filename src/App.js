import MainPage from "./components/mainPage/MainPage";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

let theme = createTheme({
  palette: {
    primary: { main: "#fce7dc" },
    secondary: { main: "#cf7748" },
  },
  typography: {
    subtitle1: {
      fontFamily: ["Gotu", "sans-serif"],
      fontSize: "1.3rem",
    },
    body1: {
      fontFamily: ["Inter", "sans-serif"],
    },
    body2: {
      fontFamily: ["Inter", "sans-serif"],
      fontSize: 17,
      lineHeight: "1.8",
    },
    h2: {
      fontFamily: ["Work Sans", "sans-serif"],
    },
    h3: {
      fontFamily: ["Work Sans", "sans-serif"],
    },
    h4: {
      fontFamily: ["Work Sans", "sans-serif"],
    },
    h5: {
      fontFamily: ["Work Sans", "sans-serif"],
    },
    h6: {
      fontFamily: ["Work Sans", "sans-serif"],
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
