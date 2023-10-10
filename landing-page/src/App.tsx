import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement : <Error />,
    children : [
      {
        path: "/about",
        element : <AboutUs/>
      },
      {
        path: "/contact",
        element : <ContactUs/>
      },
      {
        path: "/",
        element : <Home/>
      },
    ]
  }
])

export default <RouterProvider router={appRouter}/>
