import HomeLayout from "../../components/layout/home"
import { ThemeProvider } from "../../context/theme-context"

const Home = () => {
  return (
    <ThemeProvider>
      <HomeLayout/>
    </ThemeProvider>
  )
}

export default Home