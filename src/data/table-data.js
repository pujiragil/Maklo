import { phone, netflix, figma, bitcoin, person, instagram, uihut, citi } from '../assets'

export const tableHeader = ['name/business', 'type', 'amount', 'date', 'invoice id', 'action']

export const tableData = [
  {
    id: + new Date(),
    imgLink: phone,
    alt: "phone",
    title: "Iphone 13 Pro MAX",
    company: "Apple. Inc",
    type: "Mobile",
    amount: "$420.84",
    date: ["21 Aug 2022", "at 8:00 PM"],
    invoiceId: "MGL0124877"
  },
  {
    id:  + new Date(),
    imgLink: netflix,
    alt: "netflix",
    title: "Netflix Subscription",
    company: "Netflix",
    type: "Entertainment",
    amount: "$100.00",
    date: ["22 Aug 2022", "at 7:00 PM"],
    invoiceId: "MGL0124585"
  },
  {
    id: + new Date(),
    imgLink: figma,
    alt: "figma",
    title: "Figma Subscription",
    company: "Figma. Inc",
    type: "Software",
    amount: "$244.20",
    date: ["23 Aug 2022", "at 10:00 PM"],
    invoiceId: "MGL0124124"
  },
  {
    id: + new Date(),
    imgLink: bitcoin,
    alt: "bitcoin",
    title: "Bitcoin Transaction",
    company: "Coinbase",
    type: "Technology",
    amount: "- $520.00",
    date: ["24 Aug 2022", "at 1:00 AM"],
    invoiceId: "MGL0128544"
  },
  {
    id: + new Date(),
    imgLink: person,
    alt: "person",
    title: "Santoso Joyo Joyo",
    company: "Pki. Inc",
    type: "Withdraw",
    amount: "$500.10",
    date: ["25 Aug 2022", "at 02:30 AM"],
    invoiceId: "MGL0122143"
  },
  {
    id: + new Date(),
    imgLink: instagram,
    alt: "instagram",
    title: "Instagram Ads",
    company: "Meta",
    type: "Entertainment",
    amount: "$100.00",
    date: ["26 Aug 2022", "at 9:00 PM"],
    invoiceId: "MGL0124877"
  },
  {
    id: + new Date(),
    imgLink: uihut,
    alt: "uihut",
    title: "UIHUT Subscription",
    company: "UIHUT",
    type: "Payment",
    amount: "- $84.00",
    date: ["27 Aug 2022", "at 7:00 AM"],
    invoiceId: "MGL0124244"
  },
  {
    id: + new Date(),
    imgLink: citi,
    alt: "citi",
    title: "Citi Bank Ltd.",
    company: "Citi Bank",
    type: "Withdraw",
    amount: "$400.00",
    date: ["28 Aug 2022", "at 5:30 AM"],
    invoiceId: "MGL0127749"
  }
]