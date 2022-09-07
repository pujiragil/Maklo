import { RiArrowRightSLine } from "react-icons/ri"
import { useThemeContext } from "../../../context/theme-context"
import { TransactionContainer, TransactionLink, TransactionRecent, TransactionRecentWrapper } from "./TransactionLayout"
import { TransactionTableList } from "./TransactionTable"

const TransactionLayout = ({ recent }) => {
  const { theme } = useThemeContext()
  return (
    <TransactionContainer theme={theme}>
      {recent ? (
        <TransactionRecentWrapper>
          <TransactionRecent theme={theme}>Recent Transaction</TransactionRecent>
          <TransactionLink to="/transactions">View All <RiArrowRightSLine /></TransactionLink>
        </TransactionRecentWrapper>
      ) : null}
      <TransactionTableList recent={recent}/>
    </TransactionContainer>
  )
}

export default TransactionLayout