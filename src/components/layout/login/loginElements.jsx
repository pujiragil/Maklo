import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 15px #0000004a;
  background: ${({ dark }) => dark === 'dark' ? '#1C1A2E' : '#FFF'};
`

export const LoginFieldWrapper = styled.div`
  height: 100%;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 130px;
`

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 25px;
  width: 100%;
`

export const LoginFormTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 8px;
`

export const LoginForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const LoginImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`