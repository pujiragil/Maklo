import styled from "styled-components"
import { RiWallet3Fill } from "react-icons/ri"

const AmountItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  padding: 24px 20px;
  background: ${({ primary }) => primary ? '#363A3F' : '#F8F8F8'};
  border-radius: 10px;
  width: 100%;
`

const AmountIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background: ${({ primary }) => primary ? '#4E5257' : '#EBE8E8'};
  border-radius: 100%;
`

const AmountIcon = styled(RiWallet3Fill)`
  color: ${({ primary }) => primary ? '#C8EE44' : '#363A3F'};
  width: 14px;
  height: 14px;
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
  color: ${({ primary }) => primary ? '#FFF' : '#1B212D'};
  font-size: 24px;
  font-weight: 700;
`
const AmountWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 25px;
`

const Amount = ({ primary }) => {
  return (
    <AmountItem primary={primary}>
      <AmountIconWrapper primary={primary}>
        <AmountIcon primary={primary}/>
      </AmountIconWrapper>
      <AmountField>
        <AmountTitle>Total spending</AmountTitle>
        <AmountTotal primary={primary}>$250.80</AmountTotal>
      </AmountField>
    </AmountItem>
  )
}


export { Amount, AmountWrapper }