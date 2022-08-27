import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const RegisterFieldWrapper = styled.div`
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 130px;
`

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 25px;
  width: 100%;
`

export const RegisterFormTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 8px;
`

export const RegisterForm = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;  
`

export const RegisterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`