import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"
import { useThemeContext } from "../../../context/theme-context"

const SearchWrapper = styled.div`
  width: 30%;
  height: 48px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme === "light" ? "#F8F8F8" : "#282541"};
  border-radius: 15px;
  column-gap: 20px;
  padding: 15px;
  align-items: center;
  margin-bottom: 5px;
`

const SearchIcon = styled(RiSearchLine)`
  color: ${({ theme }) => theme === "light" ? "#363A3F" : "#78778B"};
  width: 24px;
  height: 24px;
`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: ${({ theme }) => theme === "light" ? "#363A3F" : "#78778B"};
  background: transparent;
`

const SearchField = () => {
  const { theme } = useThemeContext()
  return (
    <SearchWrapper theme={theme}>
      <SearchIcon theme={theme}/>
      <SearchInput theme={theme} type="search" placeholder="Search anything on Transactions" />
    </SearchWrapper>
  )
}

export default SearchField