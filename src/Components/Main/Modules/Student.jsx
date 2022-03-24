import { useState } from 'react'
import { db , storageRef } from '../../../Firebaseconf';
import './Student.css'
export default function Student() {
const [semester,setSemester] = useState('');
const [cgpa,setCgpa] = useState('');
const [github,setGihub] = useState('');
const [image,setImage] = useState();
// get login data from database
let studentDatabaseData= JSON.parse(localStorage.getItem("logindata"));
const addStudentHandler=(e)=>{
    e.preventDefault();
    const studentData = {
        semester,
        cgpa,
        github,
        image,
        value:true
    }
    let myData = {...studentData,...studentDatabaseData[0]}
    db.ref("users").child(`${studentDatabaseData[0].uid}`).update(myData).then(() => {
        alert("Data Updated")

    })
}
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-center mt-3'>
           <h1>Student portal</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-center'>
            <form className='px-5 pt-5' onSubmit={addStudentHandler}>
                            <h4 className='font-weight-bold py-3'>Enter Your details</h4>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="number" placeholder='Enter your semester' className='form-control my-3 p-3' value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="number" placeholder='Enter your last cgpa' className='form-control my-3 p-3' value={cgpa} onChange={(e)=>{setCgpa(e.target.value)}}/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="text" placeholder='Provide your github best repo' className='form-control my-3 p-3' value={github} onChange={(e)=>{setGihub(e.target.value)}}/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                <label for="imggg" class="form-label">submit your resume</label>
                                    <input type="file" className='form-control my-3 p-3 imggg' value={undefined} onChange={(e)=>{setImage(e.target.files[0])}}/>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <button  className='btn1'>submit details</button>
                                </div>
                            </div>
                        </form>
            </div>
        </div>
    </div>  )
}
