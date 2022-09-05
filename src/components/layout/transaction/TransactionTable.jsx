import { Fragment } from "react"
import styled from "styled-components"
import { useThemeContext } from "../../../context/theme-context"

export const TransactionTable = styled.table`
  width: 100%;
  table-layout: auto;
`

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: 600;
  color: #929EAE;
`

export const TableHead = styled.th`
  text-align: ${props => props.position};
  width: 20%;
  text-transform: uppercase;

  :first-child {
    text-align: left;
  }
`

const TableData = styled.td`
  width: 20%;
  text-align: center;
  padding: 20px 0;

  :first-child {
    width: 40%;
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

export const TableDatas = ({ imgLink, alt, title, company, type, amount, date }) => {
  const { theme } = useThemeContext()
  return (
    <Fragment>
      <TableData>
        <TableNameWrapper>
          <TableImage src={imgLink} alt={alt} />
          <TableInfo>
            <Title theme={theme}>{title}</Title>
            <Company>{company}</Company>
          </TableInfo>
        </TableNameWrapper>
      </TableData>

      <TableData>
        <Type>{type}</Type>
      </TableData>

      <TableData>
        <Amount theme={theme}>{amount}</Amount>
      </TableData>

      <TableData>
        <Date>{date[0]}</Date>
      </TableData>
    </Fragment>
  )
}