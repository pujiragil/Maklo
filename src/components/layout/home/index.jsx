import { useThemeContext } from "../../../context/theme-context"
import { Amount, AmountWrapper } from "../../atom/amount"
import { MainTitle } from "../../atom/title"
import ChartLayout from "../chart"
import Profile from "../profile"
import TransactionLayout from "../transaction"
import Wallet from "../wallet"
import { HomeContainer, HomeContent, HomeMainWrapper, HomeTitleField } from "./HomeLayout"

const HomeLayout = () => {
  const { theme } = useThemeContext()
  return (
    <HomeContainer>
      <HomeTitleField>
        <MainTitle theme={theme}>Dashboard</MainTitle>
        <Profile />
      </HomeTitleField>
      <HomeMainWrapper>
        <HomeContent>
          <AmountWrapper>
            <Amount primary="primary" theme={theme} title="Total balance" total="$5240.21" />
            <Amount theme={theme} title="Total spending" total="$250.80" />
            <Amount theme={theme} title="Total saved" total="$550.25" />
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