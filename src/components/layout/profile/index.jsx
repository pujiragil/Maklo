import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"
import { BsBellFill } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdOutlineBrightness4, MdOutlineBrightness5 } from "react-icons/md"
import { profile } from "../../../assets"
import { useThemeContext } from "../../../context/theme-context"

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #929EAE;
`

const ProfileSearchIcon = styled(RiSearchLine)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #1B212D;
  }
`

const ProfileDropDownIcon = styled(IoMdArrowDropdown)`
  width: 20px;
  height: 20px;
  color: #1B212D;
`

const ProfileNotificationIcon = styled(BsBellFill)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #1B212D;
  }
`

const DarkIcon = styled(MdOutlineBrightness4)`
  color: #929EAE;
  background: #343244;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease-in;
  transform: translateX(100%);
`

const LightIcon = styled(MdOutlineBrightness5)`
  color: #FFF;
  background: #929EAE;
  border-radius: 100%;
  width: 20px;
  transition: all 0.3s ease-in;
  height: 20px;
`

const ToggleTheme = styled.div`
  width: 48px;
  min-height: 24px;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in;
  border-radius: 50px;
  border: 2px solid #929EAE;
  background: ${({ theme }) => theme === "light" ? "#FFF" : "#929EAE"};
  cursor: pointer;
`

const ProfileField = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  /* padding: 0 10px; */
`

const ProfileItem = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
`

const ProfilePic = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  object-fit: cover;
`

const ProfileName = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const Profile = () => {
  const {theme, setTheme} = useThemeContext()
  
  return (
    <ProfileWrapper>
      <ProfileSearchIcon />
      <ProfileNotificationIcon />
      <ToggleTheme theme={theme} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <LightIcon/> : <DarkIcon/>}
      </ToggleTheme>
      <ProfileField>
        <ProfileItem>
          <ProfilePic src={profile} alt="profile"/>
          <ProfileName theme={theme} >Puji Ragil</ProfileName>
        </ProfileItem>
        <ProfileDropDownIcon/>
      </ProfileField>
    </ProfileWrapper>
  )
}

export default Profile