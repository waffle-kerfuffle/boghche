import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUserFollow,
  cilGroup,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'داشبورد',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: 'لیدر',
   icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'افزودن لیدر جدید',
        to: '/CreateLeader',
      },
      {
        component: CNavItem,
        name: 'لیست لیدرها',
        to: '/leaders',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'تور',
   icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'افزودن تور جدید',
        to: '/CreateTrip',
      },
      {
        component: CNavItem,
        name: 'لیست تورها',
        to: '/trips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'صفحات',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'لاگین',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'ثبت نام',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
