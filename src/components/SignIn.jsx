import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AxiosService from '../utilis/ApiService';
import { toast } from 'react-toastify';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import "../components/style.css"

function SignIn() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailRes, setEmailRes] = useState("");
  let [passwordRes, setpasswordRes] = useState("")
  let [submit, setSubmit] = useState(false);

  let navigate = useNavigate()
  let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  useEffect(() => {
    clearError();
  },[email,password]);
  
  let clearError = () => {
    setEmailRes('');
    setpasswordRes('');
  }

  let handleLogin = async(e) => {
    e.preventDefault();

    clearError();
    // Email and Password Verification
    if(email.trim() === ''){
      setEmailRes("Please fill this input field");
      return;
    }
    else if(!emailPattern.test(email)){
      setEmailRes("Email should be in correct format")
    return
    }

  if(password.trim() === ""){
    setpasswordRes("Please fill this input field");
    return
  }
  else if(password.length < 3){
    setpasswordRes("Password should be atleast greater than 3 characters, Make Strong password!")
    return
  }
  setSubmit(true);

  try {
    let res = await AxiosService.post(`/user/login`, {
      email,
      password
    });
    setEmail(''),
    setPassword('');

    if(res.status === 200){
      toast.success(res.data.message)
      sessionStorage.setItem('token', res.data.token)
      sessionStorage.setItem('userData', JSON.stringify(res.data.userData))
    }
    if(res.data.userData)
      navigate('/home')
    else
      toast.error("Incorrect Email or Password")

  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed. Please try again.");
    // toast.error(error.res.data.message)
    setSubmit(false)
  }
}

  return <>
  <div className="container">
  <img src='/src/assets/Images/logo.jpeg' alt='App Logo' className='logo-img'/>
  <h1 style={{textAlign:"center", color:"var(--theme)"}}>Expenses Tracker</h1>

  <Form>
    <div className="div-label">
    <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Email Address</Form.Label>
        <Form.Control type="email"
        placeholder='Enter Your Email Address'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} required/>
      </Form.Group>
      {emailRes && <p className="text-danger">{emailRes}</p>}

      <Form.Group className='mb-3'>
        <Form.Label className='label-text'>Password</Form.Label>
       <Form.Control type="password"
        placeholder='Enter Your Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)} required/>
      </Form.Group>
      {passwordRes && <p className="text-danger">{passwordRes}</p>}
    </div>
    <br/>
      <div className='login-button'>
      <Button onClick={(e)=>handleLogin(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} disabled={submit} >
        Login
      </Button>
      <br/>
      <br/>
      <div className='signup-btn'>
        Don&apos;t have an account yet? <Link to={'/signup'}>SignUp</Link>
      </div>
      </div>

  </Form>
  </div>
  </>
}

export default SignIn