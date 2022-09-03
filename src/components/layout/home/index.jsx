import { Amount, AmountWrapper } from "../../atom/amount"
import { MainTitle } from "../../atom/title"
import ChartLayout from "../chart"
import Profile from "../profile"
import TransactionLayout from "../transaction"
import Wallet from "../wallet"
import { HomeContainer, HomeContent, HomeMainWrapper, HomeTitleField } from "./HomeLayout"

const HomeLayout = () => {
  return (
    <HomeContainer>
      <HomeTitleField>
        <MainTitle>Dashboard</MainTitle>
        <Profile />
      </HomeTitleField>
      <HomeMainWrapper>
        <HomeContent>
          <AmountWrapper>
            <Amount primary="true" title="Total balance" total="$5240.21" />
            <Amount title="Total spending" total="$250.80" />
            <Amount title="Total saved" total="$550.25" />
          </AmountWrapper>
          <ChartLayout/>
          <TransactionLayout recent/>
        </HomeContent>
        <Wallet />
      </HomeMainWrapper>
    </HomeContainer>
  )
}

export default HomeLayout