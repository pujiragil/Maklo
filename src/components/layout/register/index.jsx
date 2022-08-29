import { google, main } from "../../../assets"
import { useThemeContext } from "../../../context/theme-context"
import { Alert, Desc, Field, GoogleButton, Link, Logo, PrimaryButton, Title } from "../../atom"
import { RegisterFieldWrapper, RegisterForm, RegisterFormTitle, RegisterFormWrapper, RegisterImageWrapper, RegisterWrapper } from "./registerElements"

const RegisterLayout = () => {
  const context = useThemeContext()
  return (
    <RegisterWrapper dark={context.theme}>
      <RegisterFieldWrapper>
        <Logo />
        <RegisterFormWrapper>
          <RegisterFormTitle>
            <Title dark={context.theme}>Create new account</Title>
            <Desc>Give us some of your information to get free access to fieldly.</Desc>
          </RegisterFormTitle>
          <RegisterForm>
            <Field label="Full Name" type={"text"} placeholder="Puji Ragil" />
            <Field label="Email" type={"email"} placeholder="puji@gmail.com" />
            <Field label="Password" type={"password"} placeholder="*****" />
            <PrimaryButton className="mb">Create Account</PrimaryButton>
            <GoogleButton dark={context.theme}><img src={google} alt="google" />Sign up with google</GoogleButton>
          </RegisterForm>
          <Alert>Already have an account? <Link dark={context.theme} to="/login">Sign in</Link></Alert>
        </RegisterFormWrapper>
      </RegisterFieldWrapper>
      <RegisterImageWrapper>
        <img src={main} style={{ width: '100%', height: '100%', borderRadius: '0 20px 20px 0' }} alt="main" />
      </RegisterImageWrapper>
    </RegisterWrapper>
  )
}

export default RegisterLayout