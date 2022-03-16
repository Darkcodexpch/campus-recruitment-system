import './Signup.css'
import img from '../../Header/Logo.png'
export default function Signup() {
    return (
        <section className='Form my-4 mx-5'>
            <div className='container'>
                <div className='row no-gutters signuprow'>
                    <div className='col-lg-5'>
                        <img src={img} alt='image' className='img-fluid' />
                    </div>

                    <div className='col-lg-7'>
                        <form className='px-5 pt-5'>
                            {/* <h1 className='font-weight-bold py-3'>Logo</h1> */}
                            <h4 className='font-weight-bold py-3'>Sign up  for your Account</h4>
                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <input type="text" placeholder='Enter your name' className='form-control my-3 p-3' />
                                </div>
                            </div>
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
                                {/* <label for="disabledSelect" class="form-label form-control my-3 p-3">Choose Account Type</label> */}
                                 <select id="disabledSelect" class="form-select form-control my-3 p-3">
                                    <option>Choose Account type</option>
                                    <option value="Student">Student</option>
                                    <option value="Company">Company</option>
                                </select>

                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-7'>
                                    <button type='button' className='btn1'>Login</button>
                                </div>
                            </div>

                            <p className='my-3'>have an account? <a href='#'>Login Here</a> </p>
                        </form>

                    </div>

                </div>

            </div>

        </section>

    )
}
