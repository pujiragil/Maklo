import { RiArrowRightSLine } from "react-icons/ri"
import { tableHeader } from "../../../data/table-data"
import { TransactionContainer, TransactionLink, TransactionRecent, TransactionRecentWrapper } from "./TransactionLayout"
import { TableHead, TableRow, TransactionTable } from "./TransactionTable"

const TransactionLayout = ({recent}) => {
  return (
    <TransactionContainer>
      {recent ? (
        <TransactionRecentWrapper>
          <TransactionRecent>Recent Transaction</TransactionRecent>
          <TransactionLink to="/transactions">View All <RiArrowRightSLine/></TransactionLink>
        </TransactionRecentWrapper>
      ) : null}
      <TransactionTable>
        <TableRow>
          {recent ? (
            tableHeader.slice(0, 4).map(header => (
              <TableHead>{header}</TableHead>
            ))
          ) : (
            tableHeader.map(header => (
              <TableHead>{header}</TableHead>
            ))
          )}
        </TableRow>
      </TransactionTable>
    </TransactionContainer>
  )
}

export default TransactionLayout