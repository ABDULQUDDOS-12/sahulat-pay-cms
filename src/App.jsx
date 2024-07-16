import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sidebar from './components/Reusable Components/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
function App() {
  const router  = createBrowserRouter([
    {path:"/",element:<><Dashboard/></>},
    {},
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
