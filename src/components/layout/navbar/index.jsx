import { Outlet } from "react-router-dom"
import { navbarData } from "../../../data/navbar-data"
import { Logo } from "../../atom"
import { NavContainer, NavIcon, NavLink, NavLinkWrapper } from "./NavbarLayout"

const Navbar = () => {

  const overIcon = (e) => {
    console.log(e)
    e.classList.add('nav-hover')
  }

  const leaveIcon = (e) => {
    e.classList.remove('nav-hover')
  }

  return (
    <div className="main--container">
      <NavContainer>
        <Logo/>
        <NavLinkWrapper>
          {navbarData.map((nav) => (
            <NavLink onMouseOver={(e) => overIcon(e.target.children[0])} onMouseLeave={(e) => leaveIcon(e.target.children[0])} key={nav.id} to={nav.to}>
              <NavIcon src={nav.logoActive} alt={nav.alt}/>
              {nav.link}
            </NavLink>
          ))}
        </NavLinkWrapper>
      </NavContainer>
      <Outlet />
    </div>
  )
}

export default Navbar