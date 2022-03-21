import './Admin.css'
export default function Admin() {
  return (
    <div className="container">
      <div className="row shadow-sm p-2 bg-body rounded">
           <div className='col-md-12 d-flex justify-content-around mt-2'>
               <h1>Admin panel</h1>
               <button className='btn btn-danger btn-sm'>Logout</button>
           </div>
           </div>

           <div className='row mt-2'>
           <div className='col-md-6  shadow-sm bg-body rounded'>
            <h3 >Student Details</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Resume</th>
                  <th scope="col">Semester</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Delete</td>
                  <td>Edit</td>
                </tr>

              </tbody>
            </table>
          </div>


          <div className='col-md-6 shadow-sm bg-body rounded'>
            <h3>Company Details</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td >Delete</td>
                  <td >Edit</td>
                </tr>

              </tbody>
            </table>

          </div>

           </div>
        </div>
  )
}
