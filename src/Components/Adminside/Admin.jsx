import './Admin.css'
import { Modal, Button } from 'react-bootstrap';
import { db } from "../../Firebaseconf";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { upload } from '@testing-library/user-event/dist/upload';
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
    setStudentData(studentData.filter((elem, index) => { if (elem.data.uid != id) return elem }))
    alert("Student Deleted Succesfully")

  }
  const deleteCompanyHandler = (id) => {
    db.ref("users").child(id).remove()
    setCompanyData(companyData.filter((elem, index) => { if (elem.data.uid != id) return elem }))
    alert("Company Deleted Succesfully")

  }


  const logOutHandler = () => {
    localStorage.removeItem("logindata");
    navigate('/Signin')
  }

  // searchstudent
  const [searchStudent, setSearchStudent] = useState('')
  const [searchCompany, setSearchCompany] = useState('')

  // modal work
  const [show, setShow] = useState(false)
  const [studentshow, setstudentshow] = useState(false)
  const handleCloseStudent = () => setstudentshow(false)
  const hanldeClose = () => setShow(false)
  const [companyUpdatevaluedata, setCompanyUpdatevaluedata] = useState('')
  const [newCompanynameid,setNewCompanynameid] = useState('')
  const [newCompanyname,setNewCompanyname] = useState('')
  const handleShow = (data) => {
    setCompanyUpdatevaluedata(data)
    setNewCompanynameid(data.uid);
    setNewCompanyname(data.name)
    setShow(true)
  
  }

  const editCompanyHandler = () => {
    db.ref("users").child(`${newCompanynameid}`).update({ name: newCompanyname }).then(() => {
      alert("Data Updated")
      setNewCompanyname('')
      setShow(false)
      
    })

  }
  const [studentname,setStudentname] = useState('');
  const [studentsemester,setStudentsemester] = useState('');
  const [studentgithub,setStudentgithub] = useState('');
  const [studentnamecgpa,setStudentcgpa] = useState('');
  const [studentid, setstudentid] = useState({});
  const handleShowStudent = (data) =>{
    setstudentid(data.uid)
    setStudentname(data.name)
    setStudentsemester(data.semester)
    setStudentgithub(data.github)
    setStudentcgpa(data.cgpa)
    setstudentshow(true)

  }
  
const editStudentHandler = () => {
 db.ref("users").child(`${studentid}`).update({ 
   name: studentname,
   semester: studentsemester,
   github:studentgithub,
   cgpa:studentnamecgpa

  }).then(() => {
      alert("Data Updated")
      setStudentname("")
      setStudentsemester("")
      setStudentgithub("")
      setStudentcgpa("")
      setstudentshow(false)
    })
    console.log(studentid)
  
  
  }

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
          <input type="search" placeholder='Search student' className='form-control' style={{ marginTop: 10, marginBottom: 10, width: "40%" }}
            onChange={(e) => { setSearchStudent(e.target.value) }} />
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
              {studentData && studentData.filter((val) => {
                if (searchStudent === "") {
                  return val
                }
                else if (
                  val?.data?.name && val?.data?.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.semester && val?.data?.semester.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.github && val?.data?.github.toLowerCase().includes(searchStudent.toLowerCase()) ||
                  val?.data?.cgpa && val?.data?.cgpa.toLowerCase().includes(searchStudent.toLowerCase())

                ) {
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
                  <td><button className='btn btn-primary' onClick={()=>{handleShowStudent(i.data)}}>Edit</button></td>
                </tr>

              })
              }

            </tbody>
          </table>
        </div>


        <div className='col-md-12 shadow-sm bg-body rounded mt-3'>
          <input type="search" placeholder='Search CompanyData' className='form-control' style={{ marginTop: 10, marginBottom: 10, width: "40%" }}
            onChange={(e) => { setSearchCompany(e.target.value) }} />
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
              {companyData && companyData.filter((val) => {
                if (searchCompany === "") {
                  return val
                }
                else if (val?.data?.name && val?.data?.name.toLowerCase().includes(searchCompany.toLowerCase()))
                  return {
                    val
                  }
              }).map((i, k) => {
                return <tr key={k}>
                  <th scope="row">{k + 1}</th>
                  <td>{i.data.name}</td>
                  <td><button className='btn btn-danger' onClick={() => deleteCompanyHandler(i.data.uid)}>Delete</button></td>
                  <td><button className='btn btn-primary' onClick={()=>handleShow(i.data)}>Edit</button></td>
                </tr>

              })
              }
            </tbody>
          </table>

          <Modal show={show} onHide={hanldeClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Company Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <input type="text" className='form-control' placeholder='Enter text to update' value={newCompanyname}  onChange={(e) => { setNewCompanyname(e.target.value) }} />
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={hanldeClose}>Close</Button>
                      <Button variant="primary" onClick={editCompanyHandler}>Save changes</Button>
                    </Modal.Footer>
                  </Modal>
        </div>

      </div>
      <Modal show={studentshow} onHide={handleCloseStudent}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Student Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <input type="text" className='form-control my-2' placeholder='Enter name to update' value={studentname} onChange={(e) => { setStudentname(e.target.value) }} />
                      <input type="text" className='form-control my-2' value={studentsemester} placeholder='Enter semester to update' onChange={(e) => { setStudentsemester(e.target.value) }}/>
                      <input type="text" className='form-control my-2' value={studentgithub} placeholder='Enter github url to update' onChange={(e) => { setStudentgithub(e.target.value) }}/>
                      <input type="text" className='form-control my-2' value={studentnamecgpa} placeholder='Enter cgpa to update' onChange={(e) => { setStudentcgpa(e.target.value) }}/>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseStudent}>Close</Button>
                      <Button variant="primary" onClick={editStudentHandler}>Save changes</Button>
                    </Modal.Footer>
                  </Modal>
                
    </div>
  )
}
