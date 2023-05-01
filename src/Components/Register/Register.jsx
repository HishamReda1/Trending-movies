import axios, { Axios } from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import $ from 'jquery'
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const Register = () => {

  const [loading, setloading] = useState(false);
    let user ={
    name:'',
    email:'',
    phone:'',
    password:'',
     rePassword:'',

    }
    const navigate= useNavigate()
    async function regNewUser(obj) {
       
       
    try {
     
            let {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',obj)
            console.log(data);
           if (data.message=='success') {
            $('.sucMsg').fadeIn(500,function () {
                navigate('/Login')
            })
           } 
          
    } catch (error) {
        console.log(error.response.data.errors.msg);
        $('.errMsg').fadeIn(500)
        $('.errMsg').text( error.response.data.errors.msg);
    }
     }
    
  let formik=  useFormik(
{

    initialValues:user,
    onSubmit:function(values){
         regNewUser(values) ;
       
    },
    validate:function(values){
        let errors={}
        if (values.name.length<3 ||values.name.length>10 ) {
            
            errors.name='Name must be more than 3 charachters and less than 10'
        }
         if(!values.phone.match(/^01[0125][0-9]{8}$/)) {
            errors.phone=' Invalid phone '
        }
        if (!values.email) {
            errors.email = 'Required';
          }
           else if (!/^(?!.{51})([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
        if ((!/^(?=.*[A-Za-z]{3})(?=.*\d)[A-Za-z\d]{6,12}$/i.test(values.password)) ) { 
            errors.password= 'Password must be more than 6 charachters and less than 12 and contain 3 characters at least ';
        }
      
        if (values.password!=values.rePassword) {
            errors.rePassword= 'Password is not matched ';
        }
        return errors

    }
 
}


    )
    return (
        <>
        <Helmet>
                <title>Register</title>
               
            </Helmet>
            <div className="container w-75 mx-auto pt-5">
              <form   action="" onSubmit={formik.handleSubmit}>
                <h3>Registeration form</h3>
                <div style={{display:'none',alignItems:'center'}} className="errMsg alert alert-danger text-center">Email already in use.</div>
                <div style={{display:'none',alignItems:'center'}} className="sucMsg alert alert-success text-center">Congratulations!</div>

               
                <label className='mt-2' htmlFor="name">Name</label>
                 <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}  className='form-control' id='name' type="text" placeholder='Enter your name' />
                 {formik.errors.name && formik.touched.name?<div className="alert alert-danger text-center">{formik.errors.name}</div>:''}
                 <label className='mt-2' htmlFor="email">Email</label>
                 <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control' id='email' type="email" placeholder='Enter your email' />
                 {formik.errors.email&& formik.touched.email?<div className="alert alert-danger text-center">{formik.errors.email}</div>:''}

                 <label className='mt-2' htmlFor="phone">Phone</label>
                 <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control' id='phone' placeholder='Enter your phone' />
                 {formik.errors.phone && formik.touched.phone?<div className="alert alert-danger text-center">{formik.errors.phone}</div>:''}

                 
                 <label className='mt-2' htmlFor="password">Password</label>
                 <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control' id='password' type="password" placeholder='Enter your password' />
                 {formik.errors.password && formik.touched.password?<div className="alert alert-danger text-center">{formik.errors.password}</div>:''}

                 <label className='mt-2' htmlFor="rePassword">     rePassword</label>
                 <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} className='form-control' id='rePassword' type="password" placeholder='rePassword' />
                 {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger text-center">{formik.errors.rePassword}</div>:''}

                 <button disabled={!formik.isValid &&!formik.dirty} className='btn btn-primary mt-4' onClick={()=>setloading(true)} type='submit'> {!loading?'Register':<><i className="fa fa-spinner fa-spin text-white"></i></>}</button>



              </form>




            </div>
        </>
    );
}

export default Register;
