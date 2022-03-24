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
    console.log("deleteStudent", id)

  }
  const editStudentHandler = (id) => {
    console.log("editStudent", id)
  }
  const deleteCompanyHandler = (id) => {
    console.log("deleteStudent", id)

  }
  const editCompanyHandler = (id) => {
    console.log("editStudent", id)
  }

  const logOutHandler = () => {
    localStorage.removeItem("logindata");
    navigate('/Signin')
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
              {studentData && studentData.map((i, k) => {
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
              {companyData && companyData.map((i, k) => {
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
