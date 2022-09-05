import styled from "styled-components"
import { BsThreeDots } from "react-icons/bs"

export const WalletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const WalletContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :first-child {
    margin-bottom: 30px;
  }
`

export const WalletTitleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const WalletTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme === "light" ? "#1B212D" : "#FFF"};
`

export const WalletSubTitle = styled.p`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #29A073;
  column-gap: 6px;
`

export const Dot = styled(BsThreeDots)`
  color: #929EAE;
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #1B212D;
  }
`

export const WalletCreditContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const WalletCredit = styled.img`
  width: 100%;
  height: 210px;

  :last-child {
    width: 90%;
    height: 190px;
    margin-top: -65px;
  }
`