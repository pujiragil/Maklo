import styled from "styled-components"
import { useThemeContext } from "../../../context/theme-context"

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ dark }) => dark === 'dark' ? '#FFF' : '#1B212D'};
`

const Input = styled.input`
  padding: 15px 20px;
  color: #78778B;
  border-radius: 10px;
  outline: none;
  border: 1px solid ${({ dark }) => dark === 'dark' ? '#282541' : '#F2F2F2'};
  transition: all .2s ease-in-out;
  background: transparent;

  :focus {
    border: 1px solid ${({ dark }) => dark === 'dark' ? '#F2F2F2' : '#1B212D'};
    color: ${({ dark }) => dark === 'dark' ? '#FFF' : '#1B212D'};
    transition: all .2s ease-in-out;
  }
`


const Field = ({label, type, placeholder}) => {
  const context = useThemeContext()
  return (
    <FieldWrapper>
      <Label dark={context.theme}>{label}</Label>
      <Input dark={context.theme} type={type} required placeholder={placeholder}/>
    </FieldWrapper>
  )
}

export default Field