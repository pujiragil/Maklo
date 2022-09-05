import styled from "styled-components"
import { RiWallet3Fill } from "react-icons/ri"

const AmountItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  padding: 24px 20px;
  background: ${({ theme }) => theme === "light" ? "#F8F8F8" : "#201D34"};
  border-radius: 10px;
  width: 100%;

  &.primary {
    background: ${({ theme }) => theme === "light" ? "#363A3F" : "#282541"};
  }
`

const AmountIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme === "light" ? '#EBE8E8' : '#292642'};
  border-radius: 100%;

  &.primary {
    background: ${({ theme }) => theme === "light" ? "#4E5257" : "#353255"}
  }
`

const AmountIcon = styled(RiWallet3Fill)`
  color: ${({ theme }) => theme === "light" ? '#363A3F' : '#FFF'};
  width: 18px;
  height: 18px;

  &.primary {
    color: #C8EE44;
  }
`

const AmountField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 10px;
`

const AmountTitle = styled.p`
  color: #929EAE;
  font-size: 14px;
  font-weight: 400;
`

const AmountTotal = styled.p`
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
  font-size: 24px;
  font-weight: 700;

  &.primary {
    color: #FFF;
  }
`
const AmountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  margin: 0 40px 30px 0;
`

const Amount = ({ primary, theme, title, total }) => {
  return (
    <AmountItem className={primary} theme={theme}>
      <AmountIconWrapper className={primary} theme={theme}>
        <AmountIcon className={primary} theme={theme}/>
      </AmountIconWrapper>
      <AmountField>
        <AmountTitle>{title}</AmountTitle>
        <AmountTotal className={primary} theme={theme}>{total}</AmountTotal>
      </AmountField>
    </AmountItem>
  )
}


export { Amount, AmountWrapper }