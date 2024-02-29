import React from 'react'
import { Link } from 'react-router-dom';
import Homepage from './Homepage';

const Navbar:React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Employee
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createEmployee" className="nav-link">
                  Create Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/getEmployee" className="nav-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
        <Link className="btn btn-success" to="/getEmployee">
          Get Employee{" "}
        </Link>
      </div> */}
    </>
  );
}

export default Navbar