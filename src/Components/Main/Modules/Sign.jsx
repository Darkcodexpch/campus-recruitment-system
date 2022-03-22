import Header from '../../Header/Header'
import './Sign.css'
import { Link } from 'react-router-dom'
import { db, auth } from '../../../Firebaseconf'
import img from '../../Header/Logo.png'
import { useState } from 'react'
export default function Sign() {
    const [Email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [data,setData] = useState('');

    console.log(data);
    const loginHandler = (e)=>{
        e.preventDefault();

        if(Email==="" || password===""){
            alert("Please Fill details properly")
        }
        else{
 auth.signInWithEmailAndPassword(Email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    db.ref().child("users").child(user.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
          setData([snapshot.val()])
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
            setEmail('');
            setPassword('');
            
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
                        <form className='px-5 pt-5' onSubmit={loginHandler}>
                            <h4 className='font-weight-bold py-3'>Sign into your Account</h4>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="email" placeholder='Enter your email' className='form-control my-3 p-3' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="password" placeholder='*******' className='form-control my-3 p-3' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <button  className='btn1'>Login</button>
                                </div>
                            </div>
                           <p className='my-3'>Dont have account?<Link to="/Signup">Register Here</Link></p>
                        </form>

                    </div>

                </div>

            </div>

        </section></>
    )
}
