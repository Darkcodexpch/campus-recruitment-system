import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom"
import Protected from "./Components/Protected"
import MainContent from "./Components/Main/MainContent"
import Sign from "./Components/Main/Modules/Sign"
import Signup from "./Components/Main/Modules/Signup"
import Admin from "./Components/Adminside/Admin"
import Company from "./Components/Adminside/Company"
import Student from "./Components/Main/Modules/Student"
export default function Main() {
  let storageData = localStorage.getItem("logindata");
  console.log(storageData)
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/Signin" element={<Sign />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route exact path='/Student' element={<Protected Cmp={Student}/>}>
            <Route exact path='/Student' element={<Student/>}/>
          </Route>
          <Route exact path='/Admin' element={<Protected Cmp={Admin}/>}>
            <Route exact path='/Admin' element={<Admin/>}/>
          </Route>
          <Route exact path='/Company' element={<Protected Cmp={Company}/>}>
            <Route exact path='/Company' element={<Company/>}/>
          </Route>

      </Routes>
    </BrowserRouter>

  )
}
