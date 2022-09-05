import { Outlet } from "react-router-dom"
import { useThemeContext } from "../../../context/theme-context"
import { NavbarData } from "../../../data/navbar-data"
import { Logo } from "../../atom"
import { NavContainer, NavLink, NavLinkWrapper } from "./NavbarLayout"

const Navbar = () => {
  const { theme } = useThemeContext()
  return (
    <div className="main--container">
      <NavContainer theme={theme}>
        <Logo/>
        <NavLinkWrapper>
          {NavbarData.map((Nav) => (
            <NavLink className={({ isActive }) => isActive ? 'active' : null} key={Nav.id} to={Nav.to}>
              <Nav.Logo className="nav--logo"/>
              {Nav.link}
            </NavLink>
          ))}
        </NavLinkWrapper>
      </NavContainer>
      <Outlet />
    </div>
  )
}

export default Navbar