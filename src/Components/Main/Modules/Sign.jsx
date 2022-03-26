import Header from '../../Header/Header'
import './Sign.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from 'react-router-dom'
import { db, auth } from '../../../Firebaseconf'
import img from '../../Header/Logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function Sign() {
    let navigate = useNavigate();
    const [Email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [loginData,setLoginData] = useState('');
    if(loginData !== ""){
        localStorage.setItem("logindata",JSON.stringify(loginData));  
    }
    const loginHandler = (e)=>{
        e.preventDefault();

        if(Email==="" || password===""){
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
        else{
 auth.signInWithEmailAndPassword(Email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;   
    db.ref().child("users").child(user.uid).get().then((snapshot) => {
        if (snapshot.exists()) {
            setLoginData([snapshot.val()]
            )
            let userdata = JSON.parse(localStorage.getItem("logindata"))
            if(userdata[0].type === "1"){
                
                navigate('/Student')

            }
            else if(userdata[0].type === "2"){
                navigate('/Company')

            }

            else if(userdata[0].type === "0"){
                navigate('/Admin')

            }
        }
         else {
          alert("Please Login First")
          navigate("/Signin")
        }
      }).catch((error) => {
        console.error(error);
        
      });
    // ...
  })
  .catch((error) => {
      console.log(error.code)
    if(error.code === "auth/user-not-found"){
        toast.error('There is no user record corresponding to this identifier. The user may have been deleted', {
       position: "top-center",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       });
       setEmail('');
       setPassword('');
   }
   else if(error.code === "auth/wrong-password"){
    toast.error('Its looks like you enter wrong password please type correct password', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        setPassword('');

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
