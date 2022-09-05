import { RiArrowRightSLine } from "react-icons/ri"
import { creditDark, creditDark2, creditLight, creditLight2 } from "../../../assets/picture"
import { useThemeContext } from "../../../context/theme-context"
import { transferData } from "../../../data/transfer-data"
import UserList from "../../atom/user"
import { Dot, WalletContent, WalletCredit, WalletCreditContent, WalletSubTitle, WalletTitle, WalletTitleContent, WalletWrapper } from "./WalletLayout"

const Wallet = () => {
  const { theme } = useThemeContext()
  return (
    <WalletWrapper>
      <WalletContent>
        <WalletTitleContent>
          <WalletTitle theme={theme}>Wallet</WalletTitle>
          <Dot />
        </WalletTitleContent>
        <WalletCreditContent>
          <WalletCredit src={theme === "light" ? creditDark : creditDark2} alt="credit" />
          <WalletCredit src={creditLight} alt="credit" />
        </WalletCreditContent>
      </WalletContent>
      <WalletContent>
        <WalletTitleContent>
          <WalletTitle theme={theme}>Scheduled Transfers</WalletTitle>
          <WalletSubTitle>View All <RiArrowRightSLine /></WalletSubTitle>
        </WalletTitleContent>
        <WalletCreditContent>
          {transferData.map(data => (
            <UserList key={data.id} {...data} />
          ))}
        </WalletCreditContent>
      </WalletContent>
    </WalletWrapper>
  )
}

export default Wallet