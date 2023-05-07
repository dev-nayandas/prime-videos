import { createBrowserRouter } from "react-router-dom"
import Home from "../../Home/Home/Home"
import Summary from "../../Summary/Summary"

 const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>,
     
    },
    {
        path:'/summary',
        element: <Summary></Summary>
    }
 
])

export default routes;