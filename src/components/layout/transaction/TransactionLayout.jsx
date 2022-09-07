import { Link } from "react-router-dom"
import styled from "styled-components"

export const TransactionContainer = styled.div`
  padding: 25px 25px 0 25px;
  border-radius: 10px;
  border: ${props => props.primary === "true" ? "none" : `1px solid ${ props.theme === "light" ? "#F5F5F5" : "#282541"}` };
  margin: ${props => props.margin ? props.margin : "0 40px 0 0"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 20px;
  width: ${props => props.width};
`

export const TrasactionTitleField = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
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