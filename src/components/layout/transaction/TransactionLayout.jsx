import { Link } from "react-router-dom"
import styled from "styled-components"

export const TransactionContainer = styled.div`
  padding: 25px 25px 0 25px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme === "light" ? "#F5F5F5" : "#282541"};
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`

export const TransactionRecentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TransactionRecent = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

export const TransactionLink = styled(Link)`
  text-decoration: none;
  color: #29A073;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  font-size: 14px;
`