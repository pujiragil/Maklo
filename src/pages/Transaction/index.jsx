import React from 'react'
import SearchField from '../../components/atom/search'
import { MainTitle } from '../../components/atom/title'
import Profile from '../../components/layout/profile'
import { TransactionContainer, TrasactionTitleField } from '../../components/layout/transaction/TransactionLayout'
import { TransactionTableList } from '../../components/layout/transaction/TransactionTable'
import { useThemeContext } from '../../context/theme-context'

const Transaction = () => {
  const {theme} = useThemeContext()
  return (
    <TransactionContainer width="100%" margin="0 40px" primary="true">
      <TrasactionTitleField>
        <MainTitle theme={theme}>Trasactions</MainTitle>
        <Profile/>
      </TrasactionTitleField>
      <SearchField/>
      <TransactionTableList main/>
    </TransactionContainer>
  )
}

export default Transaction