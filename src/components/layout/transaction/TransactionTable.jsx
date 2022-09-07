import { Fragment } from "react"
import styled from "styled-components"
import { useThemeContext } from "../../../context/theme-context"
import { tableData, tableHeader } from "../../../data/table-data"

export const TransactionTable = styled.table`
  width: 100%;
  table-layout: auto;

  &.main {
    padding: 25px 0;
    border-top: 1px solid ${({ theme }) => theme === "light" ? "#F5F5F5" : "#282541"};
  }
`

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: 600;
  color: #929EAE;
`

export const TableHead = styled.th`
  text-align: ${props => props.position};
  text-transform: uppercase;

  :first-child {
    text-align: left;
  }
`

const TableData = styled.td`
  width: auto;
  text-align: ${({ recent }) => recent ? "center" : "left"};
  padding: 20px 0;
  border-bottom: ${props => props.recent ? "none" : `1px solid ${props.theme === "light" ? "#F5F5F5" : "#282541"}` };

  :first-child {
    width: ${({ recent }) => recent ? "40%" : "30%"};
  }
`

const TableNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`

const TableImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`

const TableInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const Company = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #929EAE;
`

const Type = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #929EAE;
`

const Amount = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #929EAE;
`

const Invoice = styled.p`
  color: #78778B;
  font-size: 14px;
  font-weight: 500;
`

const Action = styled.button`
  background: #C8EE44;
  color: #1B212D;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 4px;
  border: none; 
  outline: none;
  cursor: pointer;
`

export const TableDatas = ({ imgLink, alt, title, company, type, amount, date, invoiceId, recent }) => {
  const { theme } = useThemeContext()
  return (
    <Fragment>
      <TableData theme={theme} recent={recent}>
        <TableNameWrapper>
          <TableImage src={imgLink} alt={alt} />
          <TableInfo>
            <Title theme={theme}>{title}</Title>
            <Company>{company}</Company>
          </TableInfo>
        </TableNameWrapper>
      </TableData>

      <TableData recent={recent}>
        <Type>{type}</Type>
      </TableData>

      <TableData recent={recent}>
        <Amount theme={theme}>{amount}</Amount>
      </TableData>

      <TableData recent={recent}>
        <Date>{date[0]}</Date>
      </TableData>

      {recent ? null : (
        <>
          <TableData>
            <Invoice>{invoiceId}</Invoice>
          </TableData>

          <TableData>
            <Action>Action</Action>
          </TableData>
        </>
      )}
    </Fragment>
  )
}

export const TransactionTableList = ({ recent, main }) => {
  const { theme } = useThemeContext()
  return (
    <TransactionTable className={`${main && "main"}`}>
      <thead>
        <TableRow>
          {recent ? (
            tableHeader.slice(0, 4).map((header, index) => (
              <TableHead recent key={index} position="center">{header}</TableHead>
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
            <TableRow key={index} recent={recent}>
              <TableDatas key={data.id} {...data} recent />
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
  )
}