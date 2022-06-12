import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Leaders
const Leaders = React.lazy(() => import('./views/leaders/Leader'))
//CreateLeader
const CreateLeader = React.lazy(() => import('./views/leaders/CreateLeader'))

//Trips
const Trips = React.lazy(() => import('./views/trips/Trip'))
//CreateTrip
const CreateTrip = React.lazy(() => import('./views/trips/CreateTrip'))

///Details
const Details = React.lazy(() => import('./views/details/Details'))


// Base

const Tables = React.lazy(() => import('./views/base/tables/Tables'))


// Buttons


//Forms


// Icons


// Notifications



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'داشبورد', element: Dashboard },
  { path: '/leaders', name: 'لیدرها', element: Leaders },
  { path: '/CreateLeader', name: 'افزورن لیدر جدید', element: CreateLeader },
  { path: '/trips', name: 'تورها', element: Trips },
  { path: '/CreateTrip', name: 'افزورن تور جدید', element: CreateTrip },
  { path: '/Details', name: 'جزئیات', element: Details },
  { path: '/base/tables', name: 'Tables', element: Tables }
]

export default routes
