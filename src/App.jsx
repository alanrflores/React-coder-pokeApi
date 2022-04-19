import { Outlet } from "react-router-dom"
import Footer from "./componentes/navegacion/Footer"
import Navbar from "./componentes/navegacion/Navbar"





const App = () => {
  return (
    <>
      <Navbar />
      <div className="d-flex w-100">
        <Outlet />
      </div>
      <Footer />

    </>
  )
}

export default App