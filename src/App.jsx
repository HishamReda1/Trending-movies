import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tvshow from './Components/Tvshow/Tvshow';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import { Offline } from 'react-detect-offline';
import Verify from './Components/Login/Verify';
import UpdatePassword from './Components/Login/updatePassword';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {


  const [userdata, setuserData] = useState(null);
  function saveUser() {
    let encodetoken = localStorage.getItem('tkn')
    let decodedtoken = jwtDecode(encodetoken)
    setuserData(decodedtoken)

  }
  function removeUser() {
    let token = localStorage.removeItem('tkn')

   
    const confirm = window.confirm('Are you sure to logout?');
if (confirm) {
  setuserData(token)
}


  }
  useEffect(() => {
    if (localStorage.getItem('tkn') !== null && userdata == null) {
      saveUser()
    }

    ;
  }, []);

  
  let routers = createBrowserRouter([
    { path: "", element: <Layout userdata={userdata} removeUser={removeUser}/>, children: [
      {index:true , element: <Home/>},
      {path:"Home" , element: <Home/>},
      {path:"movies" , element: <Movies/>},
      {path:"tvshow" , element: <Tvshow/>},
      {path:"people" , element: <People/>},
      { path: 'Verify', element: <Verify /> },
      { path: 'moviedetails/:id/:media_type', element: <ProtectedRoute> <MovieDetails /></ProtectedRoute> },
      { path: 'UpdatePassword', element: <UpdatePassword/> },
      {path:"login" , element:<Login saveUser={saveUser}   userdata={userdata}/>},
      {path:"register" , element:<Register/> },
      {path:"*" , element: <Notfound/>},
    ]}
  ])
 
  
  
  return<> <RouterProvider router={routers}></RouterProvider>
  <Offline><div className="network"> Sorry, you are offline </div> </Offline>
  <Toaster /></>
}

export default App;
