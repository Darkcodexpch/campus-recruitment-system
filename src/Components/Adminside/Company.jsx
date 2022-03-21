export default function Company() {
  return (
   <div className='contaier'>
       <div className='row shadow-sm bg-body rounded py-2'>
           <div className='col-md-12 d-flex justify-content-around mt-2'>
               <h1>Company Name</h1>
               <button className='btn btn-danger btn-sm'>Logout</button>
           </div>
       </div>

       <div className='row shadow-sm bg-body rounded mt-2 '>
           <div className='col-md-12 text-center mt-2'>
               <table className='table'>
               <h3 >Student Details</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Download Resume</th>
                  <th scope="col">Semester</th>
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

               </table>

           </div>

       </div>

   </div>
  )
}
