import './Header.css'
function Header() {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container-fluid ok">
                                <a class="navbar-brand text-white text-uppercase ml-5" href="#">
                                    Campus Recruitment System
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon" style={{ color: "white !important" }}></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav m-auto">
                                        <li class="nav-item">
                                            <a class="nav-link active text-white text-uppercase ml-5" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link text-white text-uppercase ml-5" href="#">About</a>
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link text-white text-uppercase ml-5" href="#">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>

            </div>

        </header>
    )
}

export default Header