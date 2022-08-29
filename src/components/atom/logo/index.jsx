import { darkLogo, lightLogo } from '../../../assets'
import styled from 'styled-components'
import { useThemeContext } from '../../../context/theme-context'

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
  color: ${({ dark }) => dark === 'dark' ? '#FFF' : '#1B212D'};
`

const Logo = () => {
  const context = useThemeContext()
  return (
    <LogoWrapper>
      <LogoImage src={context.theme === 'dark' ? lightLogo : darkLogo}/>
      <LogoTitle dark={context.theme}>Maklo.</LogoTitle>
    </LogoWrapper>
  )
}

export default Logo