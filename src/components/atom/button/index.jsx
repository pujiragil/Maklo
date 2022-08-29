import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background: #C8EE44;
  color: #1B212D;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;

  .mb {
    margin-bottom: 1rem;
  }
`

export const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  border: none;
  outline: none;
  background: transparent;
  border: 1px solid ${({ dark }) => dark === 'dark' ? '#282541' : '#F5F5F5'};
  border-radius: 10px;
  color: #78778B;
  font-size: 1rem;
  font-weight: 600;
  column-gap: 10px;
  cursor: pointer; 
`