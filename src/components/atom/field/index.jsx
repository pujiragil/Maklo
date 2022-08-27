import styled from "styled-components"

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #1B212D;
`

const Input = styled.input`
  padding: 15px 20px;
  color: #78778B;
  border-radius: 10px;
  outline: none;
  border: 1px solid #F2F2F2;
  transition: all .2s ease-in-out;

  :focus {
    border: 1px solid #1B212D;
    color: #1B212D;
  transition: all .2s ease-in-out;
  }
`


const Field = ({label, placeholder}) => {
  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder}/>
    </FieldWrapper>
  )
}

export default Field