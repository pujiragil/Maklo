import { google, main } from "../../../assets"
import { Alert, Desc, Field, Forgot, GoogleButton, Link, Logo, PrimaryButton, Title } from "../../atom"
import { LoginFieldWrapper, LoginForm, LoginFormTitle, LoginFormWrapper, LoginImageWrapper, LoginWrapper } from "./loginElements"

const LoginLayout = () => {
  return (
    <LoginWrapper>
      <LoginFieldWrapper>
        <Logo />
        <LoginFormWrapper>
          <LoginFormTitle>
            <Title>Welcome back</Title>
            <Desc className="mb">Welcome back! Please enter your details</Desc>
          </LoginFormTitle>
          <LoginForm>
            <Field label="Email" placeholder="Enter your email" />
            <Field label="Password" placeholder="*****" />
            <Forgot />
            <PrimaryButton className="mb">Sign in</PrimaryButton>
            <GoogleButton><img src={google} alt="google" /> Sign in with google</GoogleButton>
          </LoginForm>
          <Alert>Don't have an account? <Link to="/register">Sign up for free</Link></Alert>
        </LoginFormWrapper>
      </LoginFieldWrapper>
      <LoginImageWrapper>
        <img src={main} style={{ width: '100%' }} alt="main" />
      </LoginImageWrapper>
    </LoginWrapper>
  )
}

export default LoginLayout