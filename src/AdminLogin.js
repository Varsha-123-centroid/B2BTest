import React, { useState }  from 'react';
import { useEffect } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NextPage from './NextPage';
import axios from 'axios';
import { Link ,Routes,Route,Router,Switch, useNavigate, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
//import { useHistory } from 'react-router-dom';


const validationSchema = yup.object({
    username: yup
      .string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });
  
const AdminLogin = () => {
    const navigate = useNavigate();

   // const history=useHistory();
    const initialValues = {
        username : '',
        password : '',
      };
      const [tokenid, setTokenid] = useState('');
      
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            
           const response = await axios.post('https://api.travelxpo.in/auth/login', values);
           console.log(response);
            const token = response.data.accessToken;
            
             if(response?.data?.status === 200) {
                
                setTokenid(token);
               // console.log(tokenid);
                toast.success("Successfully Logged In");
                localStorage.setItem('tokenValue', token);
                navigate('/dashboard');
             }
             else {
                toast.error(
            "Sorry Username/Password Incorrect"
                );
             }
          
         // 
         //  history.push('/next');
          // window.location.href = '/NextPage';
          },
      });
  return (
    <div>
    <div className="container-fluid p-0">
        <div className="row g-0">
            <div className="col-lg-4">
                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                    <div className="w-100">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div>
                                    <div className="text-center">
                                        <div>
                                            <a href="#" className="">
                                                <img src="assets/images/logo.png" alt="" height="100" className="auth-logo logo-dark mx-auto" />
                                                <img src="assets/images/logo.png" alt="" height="100" className="auth-logo logo-light mx-auto" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="adminlogin p-2">
                                    
                                        <div className="contentWrapper">
                                       
                                            <div className="content" id="staff">
                                            <form onSubmit={formik.handleSubmit}>
                                                    <h4> Login</h4>
                                                    <div className="mb-3 auth-form-group-custom mb-4">
                                                        {/*<i className="ri-user-2-line auti-custom-input-icon"></i> */}
                                                        
                                                       
    <TextField
        id="username"
        name="username"
        label="Username"
        className="form-control"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
    />
                                                    </div>
                            
                                                    <div className="mb-3 auth-form-group-custom mb-4">
                                                       {/* <i className="ri-lock-2-line auti-custom-input-icon"></i> */}
                                                       
   <TextField
    id="password"
    name="password"
    label="Password"
    type="password"
    className="form-control"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
  />
                                                    </div>


                                             
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customControlInline" />
                                                        <label className="form-check-label" for="customControlInline">Remember me</label>
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                    <Button type="submit" variant="contained" color="primary" className="btn">
  Login
  </Button>


                                                    </div>

                                                    <div className="mt-4 text-center">
                                                        <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    <div className="mt-5 text-center">
                                        <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Register </a> </p>
                                        <p>© <script>document.write(new Date().getFullYear())</script> Travexpo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="authentication-bg">
                </div>
            </div>
        </div>
    </div>
    
      
</div>
  )
}

export default AdminLogin