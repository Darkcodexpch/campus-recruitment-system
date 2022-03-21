import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className='container-fluid '>
            <div className='row d-flex justify-content-between align-items-center shadow-sm  bg-dark rounded text-center py-1 text-white py-3'>
                <div className='col-md-4'>
                    <h2>Campus requirment System</h2>
                </div>
                <div className='col-md-8  d-flex justify-content-between align-items-center '>
                    <ul className='ulnav d-flex align-items-center mt-2'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/Signin">
                            <li>Login</li>
                        </Link>
                        <Link to="/Signup">
                            <li>Signup</li>

                        </Link>
                        <Link to="/About">

                            <li>About us</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header