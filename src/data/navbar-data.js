import { dashboard, dashboardActive, invoice, invoiceActive, setting, settingActive, transaction, transactionActive, wallet, walletActive } from "../assets";

export const navbarData = [
  {
    id: 1,
    logoActive: dashboardActive,
    logo: dashboard,
    alt: 'dashboard',
    to: '/',
    link: 'Dashboard'
  },
  {
    id: 2,
    logoActive: transactionActive,
    logo: transaction,
    alt: 'transaction',
    to: '/transaction',
    link: 'Transactions'
  },
  {
    id: 3,
    logoActive: invoiceActive,
    logo: invoice,
    alt: 'invoice',
    to: '/invoice',
    link: 'Invoices'
  },
  {
    id: 4,
    logoActive: walletActive,
    logo: wallet,
    alt: 'wallet',
    to: '/wallet',
    link: 'My Wallets'
  },
  {
    id: 5,
    logoActive: settingActive,
    logo: setting,
    alt: 'setting',
    to: '/setting',
    link: 'Settings'
  }
]