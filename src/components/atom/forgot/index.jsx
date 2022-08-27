import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"

const ForgotField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

const CheckboxField = styled.div`
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
`

const Checkbox = styled.input`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
`

// const CheckboxCustom = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 24px;
//   width: 24px;
//   background-color: transparent;
//   border-radius: 5px;
//   border: 1px solid red;
// `

const Label = styled.label`
  color: #1B212D;
  font-size: 14px;
  font-weight: 500;
`

const Forgot = () => {
  return (
    <ForgotField>
      <CheckboxField>
        <Checkbox type="checkbox"/>
        <Label>Remember for 30 Days</Label>
      </CheckboxField>
      <Label>Forgot password</Label>
    </ForgotField>
  )
}

export const Alert = styled.p`
  width: 65%;
  color: #929EAE;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`

export const Link = styled(LinkR)`
  color: #1B212D;
  text-decoration: none;
`


export default Forgot