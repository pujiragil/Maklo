import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"
import { BsBellFill } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { profile } from "../../../assets"

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* column-gap: 35px; */
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
  color: #1B212D;
`

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileSearchIcon />
      <ProfileNotificationIcon />
      <ProfileField>
        <ProfileItem>
          <ProfilePic src={profile} alt="profile"/>
          <ProfileName>Puji Ragil</ProfileName>
        </ProfileItem>
        <ProfileDropDownIcon/>
      </ProfileField>
    </ProfileWrapper>
  )
}

export default Profile