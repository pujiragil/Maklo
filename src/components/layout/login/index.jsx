import { google, main } from "../../../assets"
import { useThemeContext } from "../../../context/theme-context"
import { Alert, Desc, Field, Forgot, GoogleButton, Link, Logo, PrimaryButton, Title } from "../../atom"
import { LoginFieldWrapper, LoginForm, LoginFormTitle, LoginFormWrapper, LoginImageWrapper, LoginWrapper } from "./loginElements"

const LoginLayout = () => {
  const context = useThemeContext()
  return (
    <LoginWrapper dark={context.theme}>
      <LoginFieldWrapper>
        <Logo />
        <LoginFormWrapper>
          <LoginFormTitle>
            <Title dark={context.theme}>Welcome back</Title>
            <Desc className="mb">Welcome back! Please enter your details</Desc>
          </LoginFormTitle>
          <LoginForm>
            <Field label="Email" type={"email"} placeholder="Enter your email" />
            <Field label="Password" type={"password"} placeholder="*****" />
            <Forgot dark={context.theme}/>
            <PrimaryButton className="mb">Sign in</PrimaryButton>
            <GoogleButton dark={context.theme}><img src={google} alt="google" /> Sign in with google</GoogleButton>
          </LoginForm>
          <Alert>Don't have an account? <Link dark={context.theme} to="/register">Sign up for free</Link></Alert>
        </LoginFormWrapper>
      </LoginFieldWrapper>
      <LoginImageWrapper>
        <img src={main} style={{ width: '100%', borderRadius: '0 20px 20px 0' }} alt="main" />
      </LoginImageWrapper>
    </LoginWrapper>
  )
}

export default LoginLayout