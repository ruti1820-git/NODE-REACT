import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"
import ContactForm from './ContactForm'
import Footer from "./Footer"
const Layout = () => {
   return (
      <div className="main-layout ">
         <div className="header-page">
            <Navigation />
         </div>
         <div className="main-page">
            <Outlet />
         </div>
         <ContactForm></ContactForm>
         <Footer></Footer>
      </div>
   )
}
export default Layout