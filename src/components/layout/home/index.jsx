import { Amount, AmountWrapper } from "../../atom/amount"
import { MainTitle } from "../../atom/title"
import Profile from "../profile"
import { HomeContainer, HomeMainWrapper, HomeTitleField } from "./HomeLayout"

const HomeLayout = () => {
  return (
    <HomeContainer>
      <HomeTitleField>
        <MainTitle>Dashboard</MainTitle>
        <Profile/>
      </HomeTitleField>
      <HomeMainWrapper>
        <AmountWrapper>
          <Amount primary/>
          <Amount/>
          <Amount/>
        </AmountWrapper>
        <p style={{width: '290px'}}>sidebar</p>
      </HomeMainWrapper>
    </HomeContainer>
  )
}

export default HomeLayout