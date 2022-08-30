import { RiArrowRightSLine } from "react-icons/ri"
import { creditDark, creditLight } from "../../../assets/picture"
import { Dot, WalletContent, WalletCredit, WalletCreditContent, WalletSubTitle, WalletTitle, WalletTitleContent, WalletWrapper } from "./WalletLayout"

const Wallet = () => {
  return (
    <WalletWrapper>
      <WalletContent>
        <WalletTitleContent>
          <WalletTitle>Wallet</WalletTitle>
          <Dot/>
        </WalletTitleContent>
        <WalletCreditContent>
          <WalletCredit src={creditDark} alt="credit"/>
          <WalletCredit src={creditLight} alt="credit"/>
        </WalletCreditContent>
      </WalletContent>
      <WalletContent>
        <WalletTitleContent>
          <WalletTitle>Scheduled Transfers</WalletTitle>
          <WalletSubTitle>View All <RiArrowRightSLine/></WalletSubTitle>
        </WalletTitleContent>
      </WalletContent>
    </WalletWrapper>
  )
}

export default Wallet