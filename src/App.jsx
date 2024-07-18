import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Group Dashboard/Index'
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
