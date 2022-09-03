import { Link } from "react-router-dom"
import styled from "styled-components"

export const TransactionContainer = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TransactionRecentWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TransactionRecent = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1B212D;
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