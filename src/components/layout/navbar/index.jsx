import { Outlet } from "react-router-dom"
import { NavbarData } from "../../../data/navbar-data"
import { Logo } from "../../atom"
import { NavContainer, NavLink, NavLinkWrapper } from "./NavbarLayout"

const Navbar = () => {
  return (
    <div className="main--container">
      <NavContainer>
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