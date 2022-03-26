import './Signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../Header/Logo.png'
import Header from '../../Header/Header'
import { db, auth } from '../../../Firebaseconf'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate()
    let formHandler = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || password === '' || type === '') {
            toast.error('Please Fill All fileds Correctly!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {
            let user = {
                name,
                email,
                password,
                type,
            }
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    // Signed in 
                    let uid = userCredential.user.uid
                    user.uid = uid;
                    db.ref('/').child('users').child(uid).set(user)
                    toast.success('🦄 Signup Successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    setName('')
                    setEmail('')
                    setPassword('')
                    setType('')
                    navigate('/Signin')
                })
                .catch((error) => {
                    if(error.code === "auth/email-already-in-use"){
                         toast.error('Please try anoter email Current Email is already used by another User!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        setName('')
                        setEmail('')
                        setPassword('')
                        setType('')

                    }
                });

        }
    }

    return (
        <><Header /><section className='Form my-4 mx-5'>
            <div className='container'>
                <div className='row no-gutters signuprow'>
                    <div className='col-lg-5'>
                        <img src={img} alt='image' className='img-fluid' />
                    </div>

                    <div className='col-lg-7'>
                        <form className='px-5 pt-5' onSubmit={formHandler}>
                            <h4 className='font-weight-bold py-3'>Sign up  for your Account</h4>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="text" placeholder='Enter your name' className='form-control my-3 p-3' value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="email" placeholder='Enter your email' className='form-control my-3 p-3' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="password" placeholder='*******' className='form-control my-3 p-3' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    {/* <label for="disabledSelect" class="form-label form-control my-3 p-3">Choose Account Type</label> */}
                                    <select id="disabledSelect" class="form-select form-control my-3 p-3" value={type} onChange={(e) => { setType(e.target.value) }}>
                                        <option>Choose Account type</option>
                                        <option value="1">Student</option>
                                        <option value="2">Company</option>
                                    </select>

                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <button className='btn1'>Sign up</button>
                                </div>
                            </div>

                            <p className='my-3'>have an account? <Link to="/Signin">Login Here</Link></p>
                        </form>

                    </div>

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

        </section></>

    )
}
