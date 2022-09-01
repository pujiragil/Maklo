import {RiHome5Fill, RiBarChartBoxFill, RiSettings4Fill } from 'react-icons/ri'
import {BsBookmarkDashFill} from 'react-icons/bs'
import {IoIosWallet} from 'react-icons/io'

export const NavbarData = [
  {
    id: 1,
    Logo: RiHome5Fill,
    alt: 'dashboard',
    to: '/',
    link: 'Dashboard'
  },
  {
    id: 2,
    Logo: RiBarChartBoxFill,
    alt: 'transaction',
    to: '/transactions',
    link: 'Transactions'
  },
  {
    id: 3,
    Logo: BsBookmarkDashFill,
    alt: 'invoice',
    to: '/chart',
    link: 'Invoices'
  },
  {
    id: 4,
    Logo: IoIosWallet,
    alt: 'wallet',
    to: '/wallet',
    link: 'My Wallets'
  },
  {
    id: 5,
    Logo: RiSettings4Fill,
    alt: 'setting',
    to: '/setting',
    link: 'Settings'
  }
]