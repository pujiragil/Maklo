import { Amount, AmountWrapper } from "../../atom/amount"
import { MainTitle } from "../../atom/title"
import Profile from "../profile"
import Wallet from "../wallet"
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
          <Amount primary="true" total="$5240.21"/>
          <Amount total="$250.80"/>
          <Amount total="$550.25"/>
        </AmountWrapper>
        <Wallet/>
      </HomeMainWrapper>
    </HomeContainer>
  )
}

export default HomeLayout