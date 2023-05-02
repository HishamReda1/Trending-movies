import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./navbar.css"
export default function Navbar({userdata,removeUser}) {


  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to='/'><h3>Noxe</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='movies'>Movies</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to='Tvshow'>Tvshow</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='people'>People</Link>
              </li>



            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 ">

              <li className="nav-item d-flex align-items-center">
              <Link target='_blank' to={'https://www.facebook.com/Hisham.reda.43/'} className='text-decoration-none text-white'> <i  className='fab mx-2 fa-facebook text-decoration-none text-white '></i></Link>
              <Link target='_blank' to={'https://www.instagram.com/machine_432/'}className='text-decoration-none text-white' ><i className='fab mx-2 fa-instagram text-decoration-none text-white'></i></Link>
              
              <Link target='_blank' to={'https://soundcloud.com/hisham-reda-307638281'}className='text-decoration-none text-white' > <i className='fab mx-2 fa-soundcloud'></i></Link>
              </li>

              {userdata?<>
 <li className="nav-item">
   <button onClick={removeUser } className="nav-link logout" >Logout</button>
 </li></>:<><li className="nav-item ">
   <Link className="nav-link " to="Login">Login</Link>
 </li>
 <li className="nav-item"> 
   <Link className="nav-link " to="Register">Register</Link>
 </li></>}

             

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

      