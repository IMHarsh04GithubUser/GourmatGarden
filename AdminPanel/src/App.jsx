import Navbar from "./components/Navbar"
import Siderbar from "./components/Siderbar"
import { Routes,Route } from "react-router-dom"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import LB from "./pages/LeaderBoard"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import "./index.css"
function App() {


  return (
    <>
    <div>
      <ToastContainer />
    <Navbar />
      <hr />
       <div className="app-content">
        <Siderbar />
        <Routes>
          <Route path="/add" element={<Add/> }></Route>
          <Route path="/list" element={<List/> }></Route>
          <Route path="/order" element={<Orders/> }></Route>
          <Route path="/lb" element={<LB/>}/>
        </Routes>
       </div>
    </div>
     
    </>
  )
}

export default App
