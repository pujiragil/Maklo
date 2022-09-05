import styled from "styled-components"
import { useThemeContext } from "../../../context/theme-context"

const UserListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme === "light" ? "#F5F5F5" : "#201E34"};

  :last-child {
    border: none;
  } 
`

const UserInformation = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: center;
  align-items: center;
`

const UserProfile = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 100%;
`

const UserField = styled.div`
  display: flex;
  row-gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Username = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const Date = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #78778B;
`

const Price = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const UserList = ({ imgProfile, name, date, price }) => {
  const { theme } = useThemeContext()
  return (
    <UserListWrapper>
      <UserInformation>
        <UserProfile src={imgProfile} alt="profile" />
        <UserField>
          <Username theme={theme}>{name}</Username>
          <Date>{date}</Date>
        </UserField>
      </UserInformation>
      <Price theme={theme}>{price}</Price>
    </UserListWrapper>
  )
}

export default UserList