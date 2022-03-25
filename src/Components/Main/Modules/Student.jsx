import { useState, useEffect } from 'react'
import { db, storageRef } from '../../../Firebaseconf';
import './Student.css'
export default function Student() {
    const [semester, setSemester] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [github, setGihub] = useState('');
    const [image, setImage] = useState();


    // get login data from database
    let studentDatabaseData = JSON.parse(localStorage.getItem("logindata"));
    const addStudentHandler = (e) => {
        e.preventDefault();
        const studentData = {
            semester,
            cgpa,
            github,
            image,
            value: true
        }
        let myData = { ...studentData, ...studentDatabaseData[0] }
        db.ref("users").child(`${studentDatabaseData[0].uid}`).update(myData).then(() => {
            alert("Data Updated")

        })
    }

    // get student realtimedata
    const [studentlog, setStudentlog] = useState("");

    useEffect(() => {
        db.ref("users").on('value', (snapshot) => {
            let newdata = [];
            snapshot.forEach(data => {
                newdata.push({ data: data.val() })

            })
            var newArray = newdata.filter(function (el) {
                return el.data.uid === studentDatabaseData[0].uid
            }
            );
            setStudentlog(newArray)
        })
    }, [])


    // get company data
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
                return el.data.type === "2"
            }
            );
            setCompanyData(newArray)
        })
    }, [])

    //get enrollstudentdata 

    const [enstudentData, setEnstudentData] = useState('')
    useEffect(() => {
        db.ref("enrollments").on('value', (snapshot) => {
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
            setEnstudentData(newdata)
        })
    }, [])

    // console.log("enstudentData",enstudentData)
    // enroll data to databse
    let getEnrollDetails = (id, name) => {
        let studentData = {
            studentid: studentlog[0].data.uid,
            studentname: studentlog[0].data.name,
            studentsemester: studentlog[0].data.semester,
            studentcgpa: studentlog[0].data.cgpa,
            studentgithub: studentlog[0].data.github
        }
        let companyData = {
            comapnid: id,
            companyname: name
        }
        let combineData = { ...studentData, ...companyData }
        db.ref('/').child('enrollments').push(combineData)
        alert("datasaved")
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center mt-3'>
                    <h1>Student portal</h1>
                </div>
            </div>

            <div className='row'>
                {studentlog && studentlog[0].data.value && studentlog[0].data.value === true ? <div className='col-md-12 text-center mt-2'>
                    <h1 className='m-5'> Thanks {studentDatabaseData[0].name}  for registarion wait for company resposne ✔ </h1>
                </div> : <div className='col-md-12 d-flex justify-content-center'>
                    <form className='px-5 pt-5' onSubmit={addStudentHandler}>
                        <h4 className='font-weight-bold py-3'>Enter Your details</h4>
                        <div className='form-row'>
                            <div className='col-lg-12'>
                                <input type="number" placeholder='Enter your semester' className='form-control my-3 p-3' value={semester} onChange={(e) => { setSemester(e.target.value) }} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-12'>
                                <input type="number" placeholder='Enter your last cgpa' className='form-control my-3 p-3' value={cgpa} onChange={(e) => { setCgpa(e.target.value) }} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-12'>
                                <input type="text" placeholder='Provide your github best repo' className='form-control my-3 p-3' value={github} onChange={(e) => { setGihub(e.target.value) }} />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-12'>
                                <label for="imggg" class="form-label">submit your resume</label>
                                <input type="file" className='form-control my-3 p-3 imggg' value={undefined} onChange={(e) => { setImage(e.target.files[0]) }} />
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='col-lg-12'>
                                <button className='btn1'>submit details</button>
                            </div>
                        </div>
                    </form>
                </div>}

            </div>
            <div className='row mt-3'>
                <div className='col-md-12 text-center'>
                    <h1>Apply for Job listed companies are</h1>
                    <table class="table mt-5">
                        <thead>
                            <tr><th scope="col">#</th>
                                <th scope="col">company name</th>
                                <th scope="col">Action</th></tr></thead>
                        <tbody>{companyData && companyData.map((i, k) => {
                            // console.log(enstudentData.find(({data})=> data.comapnid === i.data.uid))
                            return <tr key={k}>
                                <th scope="row">{k + 1}</th>
                                <td>{i.data.name}</td> 
                                {enstudentData && enstudentData?.find(({data})=> data.comapnid === i.data.uid && data.studentid === studentDatabaseData[0].uid) ? <td><button className='btn btn-disable'>Already Applied</button></td> : <td><button className='btn btn-primary' onClick={() => { getEnrollDetails(i.data.uid, i.data.name) }}>Enroll now</button></td>}
                                
                            </tr>
                        })}</tbody></table></div>
            </div>
        </div>)
}
