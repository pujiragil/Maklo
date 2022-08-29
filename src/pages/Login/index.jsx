import LoginLayout from "../../components/layout/login"
import { ThemeProvider } from "../../context/theme-context"

const Login = () => {
  return (
    <div className="container">
      <ThemeProvider>
        <LoginLayout />
      </ThemeProvider>
    </div>
  )
}

export default Login