import MainPage from "./components/mainPage/MainPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/auth/login/Login";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

let theme = createTheme({
  palette: {
    primary: { main: "#fce7dc" },
    secondary: { main: "#fabb7c" },
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
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route path="/Auth" component={Login} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
