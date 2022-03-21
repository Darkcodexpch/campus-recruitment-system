import Header from '../../Header/Header'
import './Sign.css'
import { Link } from 'react-router-dom'
import img from '../../Header/Logo.png'
export default function Sign() {
    return (
        <><Header /><section className='Form my-4 mx-5'>
            <div className='container'>
                <div className='row no-gutters signuprow'>
                    <div className='col-lg-5'>
                        <img src={img} alt='image' className='img-fluid' />
                    </div>

                    <div className='col-lg-7'>
                        <form className='px-5 pt-5'>
                            {/* <h1 className='font-weight-bold py-3'>Logo</h1> */}
                            <h4 className='font-weight-bold py-3'>Sign into your Account</h4>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="email" placeholder='Enter your email' className='form-control my-3 p-3' />
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="password" placeholder='*******' className='form-control my-3 p-3' />
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <button type='button' className='btn1'>Login</button>
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
