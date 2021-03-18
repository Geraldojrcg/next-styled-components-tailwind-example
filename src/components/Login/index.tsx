import React from "react";
import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginFormControls,
  LoginFormInputs,
  LoginFormRemember,
  LoginHeader,
  LoginFormForgotPass,
  LoginFormSubmit,
} from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginHeader>
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2>Sign in to your account</h2>
          <p>
            Or <a href="#">start your 14-day free trial</a>
          </p>
        </LoginHeader>
        <LoginForm>
          <LoginFormInputs>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
            />
          </LoginFormInputs>
          <LoginFormControls>
            <LoginFormRemember>
              <input id="remember_me" name="remember_me" type="checkbox" />
              <label htmlFor="remember_me">Remember me</label>
            </LoginFormRemember>
            <LoginFormForgotPass>
              <a href="#">Forgot your password?</a>
            </LoginFormForgotPass>
          </LoginFormControls>
          <LoginFormSubmit>
            <button type="submit">Sign in</button>
          </LoginFormSubmit>
        </LoginForm>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
