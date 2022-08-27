import { google, main } from "../../../assets"
import { Alert, Desc, Field, GoogleButton, Link, Logo, PrimaryButton, Title } from "../../atom"
import { RegisterFieldWrapper, RegisterForm, RegisterFormTitle, RegisterFormWrapper, RegisterImageWrapper, RegisterWrapper } from "./registerElements"

const RegisterLayout = () => {
  return (
    <RegisterWrapper>
      <RegisterFieldWrapper>
        <Logo />
        <RegisterFormWrapper>
          <RegisterFormTitle>
            <Title>Create new account</Title>
            <Desc>Welcome back! Please enter your details</Desc>
          </RegisterFormTitle>
          <RegisterForm>
            <Field label="Full Name" placeholder="Puji Ragil" />
            <Field label="Email" placeholder="puji@gmail.com" />
            <Field label="Password" placeholder="*****" />
            <PrimaryButton className="mb">Create Account</PrimaryButton>
            <GoogleButton><img src={google} alt="google" />Sign up with google</GoogleButton>
          </RegisterForm>
          <Alert>Already have an account? <Link to="/login">Sign in</Link></Alert>
        </RegisterFormWrapper>
      </RegisterFieldWrapper>
      <RegisterImageWrapper>
        <img src={main} style={{ width: '100%' }} alt="main" />
      </RegisterImageWrapper>
    </RegisterWrapper>
  )
}

export default RegisterLayout