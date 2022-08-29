import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  background: #FFF;
  width: 250px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const NavLinkWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`

export const NavLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
  border-radius: 8px;
  padding: 14px;
  color: #929EAE;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #1B212D;
  }
`

export const NavIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(66%) sepia(7%) saturate(684%) hue-rotate(175deg) brightness(94%) contrast(87%);
`