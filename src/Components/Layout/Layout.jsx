import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Layout( {removeUser,userdata}) {
  
  return <>
    <Navbar  userdata={userdata} removeUser={removeUser}/>
  
      <Outlet></Outlet>
    
    <Footer />
  </>
}
