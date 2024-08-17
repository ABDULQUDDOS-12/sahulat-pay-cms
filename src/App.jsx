import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Group Dashboard/Index'
import UniqueTransactions from './pages/Group Unique Transaction Link/Index'
import Report from './pages/Group Report/Index'
import Profile from './pages/Group Profile/Index'
import GroupTransaction from './pages/Group Transactions/Index'
import Users from './pages/Users/Index'
function App() {
  const router  = createBrowserRouter([
    {path:"/",element:<><Dashboard/></>},
    {path:"/unique-transactions",element:<><UniqueTransactions/></>},
    {path:"/report",element:<><Report/></>},
    {path:"/profile",element:<><Profile/></>},
    {path:"/transaction",element:<><GroupTransaction/></>},
    {path:"/users",element:<><Users/></>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
