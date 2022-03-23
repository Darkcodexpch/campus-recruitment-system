import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
function Protected(props) {
  let navigate = useNavigate()
    // console.log("Protected",data[0].type)
  let Cmp = props.Cmp
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('logindata'));
      if(!data){
        navigate('/Signin')
      }
  else if (data[0].type === "1") {
    navigate('/Student')
  }

    
      
  },[])

//   if(data[0].type === 1){
//     navigate('/Student')
//    }
//    else if (data[0].type === 2) {
//     navigate('/Company')
//   }

//   else if (data[0].type === 0){
//       navigate('/Admin')
//   }
    return (

      <div>
          <Cmp/>
      </div>
  )
}

export default Protected