import './Admin.css'
import { db } from "../../Firebaseconf";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
export default function Admin() {
  let navigate = useNavigate();
  const [studentData, setStudentData] = useState('');
  const [companyData, setCompanyData] = useState('');
  useEffect(() => {
    db.ref("users").on('value', (snapshot) => {
      let newdata = [];
      snapshot.forEach(data => {
        newdata.push({
          data: data.val()
        })
      })
      let newstudentdata = newdata.filter(function (el) {
        return el.data.type === "1"
      }
      );
      setStudentData(newstudentdata)

      let newcompanydata = newdata.filter(function (el) {
        return el.data.type === "2"
      }
      );
      setCompanyData(newcompanydata)
    })
  }, [])

  const deleteStudentHandler = (id) => {
    db.ref("users").child(id).remove()
    setStudentData(studentData.filter((elem, index)=>{ if (elem.data.uid!=id) return elem}))
    alert("Student Deleted Succesfully")

  }
  const editStudentHandler = (id) => {
    console.log("editStudent", id)
  }
  
  const deleteCompanyHandler = (id) => {
    db.ref("users").child(id).remove()
    setCompanyData(companyData.filter((elem, index)=>{ if (elem.data.uid!=id) return elem }))
    alert("Company Deleted Succesfully")

  }
  const editCompanyHandler = (id) => {
   
  }

  const logOutHandler = () => {
    localStorage.removeItem("logindata");
    navigate('/Signin')
  }

  // searchstudent
  const [searchStudent,setSearchStudent] = useState('')
  const [searchCompany,setSearchCompany] = useState('')

  return (
    <div className="container">
      <div className="row shadow-sm p-2 bg-body rounded">
        <div className='col-md-12 d-flex justify-content-around mt-2'>
          <h1>Admin panel</h1>
          <button className='btn btn-danger btn-sm' onClick={logOutHandler}>Logout</button>
        </div>
      </div>

      <div className='row mt-2'>
        <div className='col-md-12  shadow-sm bg-body rounded'>
          <h3 >Student Details</h3>
          <input type="search" placeholder='Search student' className='form-control' style={{marginTop:10,marginBottom:10,width:"40%"}}
          onChange={(e)=>{setSearchStudent(e.target.value)}}/>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">View Resume</th>
                <th scope="col">Semester</th>
                <th scope="col">Github Url</th>
                <th scope="col">Cgpa</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {studentData && studentData.filter((val)=>{
                if(searchStudent===""){
                  return val
                }
                else if(
                  val?.data?.name &&  val?.data?.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.semester &&  val?.data?.semester.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.github &&  val?.data?.github.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.cgpa &&  val?.data?.cgpa.toLowerCase().includes(searchStudent.toLowerCase())
                  
                ){
                  return val
                }
              }).map((i, k) => {
                return <tr key={k}>
                  <th scope="row">{k + 1}</th>
                  <td>{i.data.name}</td>
                  <td>Otto</td>
                  <td>{i.data.semester}</td>
                  <td>{i.data.github}</td>
                  <td>{i.data.cgpa}</td>
                  <td><button className='btn btn-danger' onClick={() => deleteStudentHandler(i.data.uid)}>Delete</button></td>
                  <td><button className='btn btn-primary' onClick={() => editStudentHandler(i.data.uid)}>Edit</button></td>
                </tr>

              })
              }

            </tbody>
          </table>
        </div>


        <div className='col-md-12 shadow-sm bg-body rounded mt-3'>
        <input type="search" placeholder='Search CompanyData' className='form-control' style={{marginTop:10,marginBottom:10,width:"40%"}}
          onChange={(e)=>{setSearchCompany(e.target.value)}}/>
          <h3>Company Details</h3>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {companyData && companyData.filter((val)=>{
                if(searchCompany === ""){
                return val
                }
                else if(val?.data?.name &&  val?.data?.name.toLowerCase().includes(searchCompany.toLowerCase()))
                return{
                  val
                }
              }).map((i, k) => {
                return <tr key={k}>
                  <th scope="row">{k + 1}</th>
                  <td>{i.data.name}</td>
                  <td><button className='btn btn-danger' onClick={() => deleteCompanyHandler(i.data.uid)}>Delete</button></td>
                  <td><button className='btn btn-primary' onClick={() => editCompanyHandler(i.data.uid)}>Edit</button></td>
                </tr>

              })
              }

            </tbody>
          </table>

        </div>

      </div>
    </div>
  )
}
