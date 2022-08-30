import styled from "styled-components"

export const MainTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: #1B212D;
  flex: 3;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ${({ dark }) => dark === 'dark' ? '#FFF' : '#1B212D'};
`

export const Desc = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #78778B;
`