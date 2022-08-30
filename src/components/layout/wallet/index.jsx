import { RiArrowRightSLine } from "react-icons/ri"
import { creditDark, creditLight } from "../../../assets/picture"
import { transferData } from "../../../data/transfer-data"
import UserList from "../../atom/user"
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
        <WalletCreditContent>
          {transferData.map(data => (
            <UserList key={data.id} {...data}/>
          ))}
        </WalletCreditContent>
      </WalletContent>
    </WalletWrapper>
  )
}

export default Wallet