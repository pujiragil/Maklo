import { darkLogo } from '../../../assets'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
`

const LogoTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: #1B212D;
`

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={darkLogo}/>
      <LogoTitle>Maklo.</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo