import React from "react";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { Route, Switch } from "react-router-dom";

const Login = () => {
  const [loginInput] = useState(["UserName", "passwrod"]);
  const [signUpInput] = useState(["UserName", "passwrod", "confirm Password"]);
  return (
    <Switch>
      <Route
        path="/auth/login"
        render={() => <AuthForm page="Login" input={loginInput} />}
      />
      <Route
        path="/auth/signUp"
        render={() => <AuthForm page="Sign Up" input={signUpInput} />}
      />
    </Switch>
  );
};

export default Login;
