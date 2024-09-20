import {Link} from 'react-router-dom'
function NavBar(){
 return (
    <> 
   <div className="row">
  <div className="col-sm-2"></div>
  <div className="col-sm-9">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src="logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav_font" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/findjob">
                Find a Job
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav_font" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav_font"
                to="/contact"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* First Dropdown */}
          <div className="dropdown ms-auto mt-2">
            <button
              className="btn btn-outline-primary dropdown-toggle custom-btn hover-effect"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <b>Registration</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link className="dropdown-item" to="/recruiter/register">
                  Recriuter 
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/seeker/register">
                  Job Seeker
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Dropdown */}
          <div className="dropdown ms-4 mt-2">
            <button
              className="btn btn-outline-secondary dropdown-toggle custom-btn hover-effect"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <b> Login</b>
            </button>
            <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
              <li>
                <Link className="dropdown-item" to="/action1">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/action2">
                Recriuter Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/action3">
                  Seeker Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="col-sm-1"></div>
</div>

    
    </>
 )

}

export default NavBar;