import './MainContain.css'

export default function MainContent() {
  return (
    <main>
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
    </main>
  )
}
