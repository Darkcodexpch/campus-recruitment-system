import './MainContain.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
export default function MainContent() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row d-flex justify-content-center shadow-sm py-5">
          <div className="col-md-12 py-3">
            <div className="head">
              Campus recuirment System
            </div>
            <div className="pera">
              Closing in on a decade of client-side routing, React Router v6 takes the best features from previous versions—and its sister project, Reach Router—in our smallest and most powerful package yet.
            </div>
            <div className="btnn">
              <Link to="About">
                <button className='btn btn-primary'>About us</button>
              </Link>
              <Link to="Signin">
                <button className='btn btn-primary'>Sign in</button>
              </Link>



            </div>
          </div>

        </div>
      </div>
      {/* <main>
    <div className='container'>
      <div className='row d-flex text-canter'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
          <div className='heading main-head'>
            <h1 className='text-captilize text-white h1-head'>
              Campus Recruitment System
            </h1>
            <p className='mt-2  text-captilize text-white head-p text-center'>
              A college campus recruitment system that consists of a student login, company login and an admin login. The project is beneficial for college students, various companies visiting the campus for recruitment and even the college placement office
            </p>
          </div>

          <div className='twobtn d-flex justify-content-md-center mt-2'>
            <button className='btn btn-primary p-2 m-2 head-btn'>Read More</button>
            <button className='btn btn-primary p-2 m-2 head-btn'>About us</button>
          </div>


        </div>

      </div>

    </div>
    </main> */}
    </>
  )
}
