import './Student.css'
export default function Student() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-center mt-3'>
           <h1>Student portal</h1>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-12 d-flex justify-content-center'>
            <form className='px-5 pt-5'>
                            {/* <h1 className='font-weight-bold py-3'>Logo</h1> */}
                            <h4 className='font-weight-bold py-3'>Enter Your details</h4>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="text" placeholder='Enter your semester' className='form-control my-3 p-3'/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="text" placeholder='Enter your last cgpa' className='form-control my-3 p-3'/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="text" placeholder='Enter your expreince in mern stack' className='form-control my-3 p-3'/>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <input type="text" placeholder='Provide your github best repo' className='form-control my-3 p-3'/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className='col-lg-12'>
                                <label for="imggg" class="form-label">submit your resume</label>
                                    <input type="file" className='form-control my-3 p-3 imggg'/>
                                </div>
                            </div>

                            <div className='form-row'>
                                <div className='col-lg-12'>
                                    <button type='button' className='btn1'>submit details</button>
                                </div>
                            </div>
                        </form>

            </div>

        </div>

    </div>  )
}
