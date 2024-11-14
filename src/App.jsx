import React from "react"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utiles/appStore"
import Footer from "./components/Footer"



function App() {
  return (
    <>
    <Provider store={appStore}>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </Provider>
    </>
  )
}

export default App;
