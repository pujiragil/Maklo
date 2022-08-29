import { ThemeProvider } from "../../context/theme-context"
import RegisterLayout from "../../components/layout/register"

const Register = () => {
  return (
    <div className="container">
      <ThemeProvider>
        <RegisterLayout />
      </ThemeProvider>
    </div>
  )
}

export default Register