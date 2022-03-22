import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainContent from "./Components/Main/MainContent"
import Sign from "./Components/Main/Modules/Sign"
import Signup from "./Components/Main/Modules/Signup"
import Admin from "./Components/Adminside/Admin"
import Company from "./Components/Adminside/Company"
import Student from "./Components/Main/Modules/Student"
export default function Main() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainContent />}></Route>
        <Route path="/Signin" element={<Sign />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Company" element={<Company />}></Route>

      </Routes>
    </BrowserRouter>

  )
}
