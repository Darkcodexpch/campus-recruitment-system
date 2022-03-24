import { db } from "../../Firebaseconf";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
export default function Company() {
  const [companyData, setCompanyData] = useState('')
  useEffect(() => {
    db.ref("users").on('value', (snapshot) => {
      let newdata = [];
      snapshot.forEach(data => {
        newdata.push({
          data: data.val()
        })
      })
      var newArray = newdata.filter(function (el) {
        return el.data.type === "1"
      }
      );
      setCompanyData(newArray)
    })
  }, [])
let naviagte = useNavigate();
  const logoutHandler =()=>{ 
    localStorage.removeItem("logindata");
    naviagte('/Signin')}
  return (
    <>
      <div className='contaier'>
        <div className='row shadow-sm bg-body rounded py-2'>
          <div className='col-md-12 d-flex justify-content-around mt-2'>
            {companyData && <h1>Welcome {companyData[0].data.name}</h1>}
            <button className='btn btn-danger btn-sm' onClick={logoutHandler}>Logout</button>
          </div>
        </div>

        <div className='row shadow-sm bg-body rounded mt-2 '>
          <div className='col-md-12 text-center mt-2'>
            <h3 >Student Details</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Download Resume</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Github Url</th>
                  <th scope="col">Cgpa</th>
                </tr>
              </thead>
              <tbody>
              {companyData && companyData.map((i, k) => {
                return<tr key={k}>
                     <th scope="row">{k+1}</th>
                     <td>{i.data.name}</td>
                     <td>Otto</td>
                     <td>{i.data.semester}</td>
                     <td>{i.data.github}</td>
                     <td>{i.data.cgpa}</td></tr>
              })}
              </tbody>
            </table>

          </div>

        </div>

      </div>
    </>
  )
}
