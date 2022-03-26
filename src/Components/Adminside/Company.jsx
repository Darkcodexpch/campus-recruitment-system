import { db } from "../../Firebaseconf";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function Company() {

  let companyDatabse = JSON.parse(localStorage.getItem("logindata"));
  // fetching studentDetails
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


  // get enrollment company data
  const [encompanyData, setenCompanyData] = useState('')
  useEffect(() => {
    db.ref("enrollments").on('value', (snapshot) => {
      let newdata = [];
      snapshot.forEach(data => {
        newdata.push({
          data: data.val()
        })
      })
      var newArray = newdata.filter(function (el) {
        return el.data.comapnid === companyDatabse[0].uid
      }
      );
      setenCompanyData(newArray)
    })
  }, [])

  // searchdata
  const [searchStudent, setSearchStudent] = useState('')
  const [interestedSearchStudent, setinterestedSearchStudent] = useState('')

  const acceptHandler = (id, name) => {
    let ApprovedData = {
      studentid: id,
      studentname: name,
      companyid: companyDatabse[0].uid,
      companyname: companyDatabse[0].name,
      status: true,
      Message: `Hello ${name} Your selected for Second Interview`

    }

    db.ref('/').child('Jobsstatus').push(ApprovedData);
    toast.success('Application Approved!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const rejectHandler = (id, name) => {
    let ApprovedData = {
      studentid: id,
      studentname: name,
      companyid: companyDatabse[0].uid,
      companyname: companyDatabse[0].name,
      status: false,
      Message: `Hello ${name} sorry your application not fullfill our cereteria better luck time`

    }

    db.ref('/').child('Jobsstatus').push(ApprovedData);
    toast.error('Application Rejected!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const [Jobstatus, setJobstatus] = useState('')
  useEffect(() => {
    db.ref("Jobsstatus").on('value', (snapshot) => {
      let newdata = [];
      snapshot.forEach(data => {
        newdata.push({
          data: data.val()
        })
      })
      // var newArray = newdata.filter(function (el) {
      //     return el.data.studentid === studentDatabaseData[0].uid
      // }
      // );
      setJobstatus(newdata)
    })
  }, [])
  // logout work
  let naviagte = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("logindata");
    naviagte('/Signin')
  }

  return (
    <>
      <div className='contaier'>
        <div className='row shadow-sm bg-body rounded py-2'>
          <div className='col-md-12 d-flex justify-content-around mt-2'>
            {companyDatabse && <h1>Welcome {companyDatabse[0]?.name}</h1>}
            <button className='btn btn-danger btn-sm' onClick={logoutHandler}>Logout</button>
          </div>
        </div>

        <div className='row shadow-sm bg-body rounded mt-2 '>
          <div className='col-md-12 text-center mt-2'>
            <h3 >Student Details</h3>
            <input type="search" placeholder='Search Student' className='form-control' style={{ marginTop: 10, marginBottom: 10, width: "40%" }}
              onChange={(e) => { setSearchStudent(e.target.value) }} />
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
                {companyData && companyData.filter((val) => {
                  if (searchStudent === "") {
                    return val
                  }
                  else if (
                    val?.data?.name && val?.data?.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    val?.data?.semester && val?.data?.semester.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    val?.data?.github && val?.data?.github.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    val?.data?.cgpa && val?.data?.cgpa.toLowerCase().includes(searchStudent.toLowerCase()))
                    return {
                      val
                    }
                }).map((i, k) => {
                  return <tr key={k}>
                    <th scope="row">{k + 1}</th>
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

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h1 className="mb-3">Interested students</h1>
            <input type="search" placeholder='Search Interested Student' className='form-control' style={{ marginTop: 10, marginBottom: 10, width: "40%", padding: 10, marginLeft: 20 }}
              onChange={(e) => { setinterestedSearchStudent(e.target.value) }} />
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Download Resume</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Github Url</th>
                  <th scope="col">Cgpa</th>
                  <th scope="col">Accept</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>
                {encompanyData && encompanyData.filter((val) => {
                  if (interestedSearchStudent === "") {
                    return val
                  }
                  else if (
                    val?.data?.name && val?.data?.name.toLowerCase().includes(interestedSearchStudent.toLowerCase()) ||
                    val?.data?.semester && val?.data?.semester.toLowerCase().includes(interestedSearchStudent.toLowerCase()) ||
                    val?.data?.github && val?.data?.github.toLowerCase().includes(interestedSearchStudent.toLowerCase()) ||
                    val?.data?.cgpa && val?.data?.cgpa.toLowerCase().includes(interestedSearchStudent.toLowerCase()))
                    return {
                      val
                    }
                }).map((i, k) => {
                  return <tr key={k}>
                    <th scope="row">{k + 1}</th>
                    <td>{i.data.studentname}</td>
                    <td>Otto</td>
                    <td>{i.data.studentsemester}</td>
                    <td>{i.data.studentgithub}</td>
                    <td>{i.data.studentcgpa}</td>
                    {/* {Jobstatus&&Jobstatus?.find(({data})=> data.studentid === i.data.studentid && data.companyid === i.data.comapnid && data.status === true)?<td><button className='btn btn-disable btn-outline-success'>Apllication view call for second interview</button>
                     </td>:<></> } */}

                    {Jobstatus && Jobstatus?.find(({ data }) => data.studentid === i.data.studentid && data.companyid === i.data.comapnid && data.status === true) ? <td><button className='btn btn-disable btn-outline-success'>Apllication view call for second interview</button>
                    </td>
                      : Jobstatus && Jobstatus?.find(({ data }) => data.studentid === i.data.studentid && data.companyid === i.data.comapnid && data.status === false) ? <td><button className='btn btn-disable btn-outline-danger'>Appication Rejected</button>
                      </td>
                        : <>
                        <td><button className="btn btn-primary" onClick={() => acceptHandler(i.data.studentid, i.data.studentname)}>Accept</button></td>
                        <td><button className="btn btn-danger" onClick={() => rejectHandler(i.data.studentid, i.data.studentname)}>Reject</button></td> </>}
                  </tr>
                })}
              </tbody>
            </table>

          </div>

        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>
    </>
  )
}
