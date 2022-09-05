import { RiArrowRightSLine } from "react-icons/ri"
import { useThemeContext } from "../../../context/theme-context"
import { tableData, tableHeader } from "../../../data/table-data"
import { TransactionContainer, TransactionLink, TransactionRecent, TransactionRecentWrapper } from "./TransactionLayout"
import { TableDatas, TableHead, TableRow, TransactionTable } from "./TransactionTable"

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
      <TransactionTable>
        <thead>
          <TableRow>
            {recent ? (
              tableHeader.slice(0, 4).map((header, index) => (
                <TableHead key={index} position="center">{header}</TableHead>
              ))
            ) : (
              tableHeader.map((header, index) => (
                <TableHead key={index} position="left">{header}</TableHead>
              ))
            )}
          </TableRow>
        </thead>
        <tbody>
          {recent ? (
            tableData.slice(0, 3).map((data, index) => (
              <TableRow key={index} >
                <TableDatas key={data.id} {...data} />
              </TableRow>
            ))
          ) : (
            tableData.map((data, index) => (
              <TableRow key={index} >
                <TableDatas key={data.id} {...data} />
              </TableRow>
            ))
          )
          }
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}

export default TransactionLayout