import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Group Dashboard/Index'
import UniqueTransactions from './pages/Group Unique Transaction Link/Index'
function App() {
  const router  = createBrowserRouter([
    {path:"/",element:<><Dashboard/></>},
    {path:"/unique-transactions",element:<><UniqueTransactions/></>},
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
