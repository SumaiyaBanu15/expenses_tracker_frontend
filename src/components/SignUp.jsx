import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AxiosService from '../utilis/ApiService';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import "../components/style.css";

function SignUp() {
    let [name, setName] = useState("");
    let [email, setEmail]  = useState("");
    let [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameRes, setNameRes] = useState("");
    const [emailRes, setEmailRes] = useState("");
    const [passwordRes, setPasswordRes] = useState("");
    const [confirmPasswordRes, setConfirmPasswordRes] = useState("");
    const [submit, setSubmit] = useState(false);

    let navigate = useNavigate();

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    useEffect(() => {
        clearError();
    }, [name, email, password, confirmPassword])
 
    const clearError = () => {
        setNameRes('');
        setEmailRes('');
        setPasswordRes('');
        setConfirmPasswordRes('');
    }

    let handleSignup = async(e) => {
        e.preventDefault();

        clearError();
        // Name Verification
        if(name.trim() === ''){
            setNameRes("Please fill this input field");
            return;
        }
        else if(name.length < 3){
            setNameRes("Name should be atleast 3 characters long!");
            return;
        }
        // Email Verification
        if(email.trim() === ''){
            setEmailRes("Please fill this input field ");
            return;
        }
        else if(!emailPattern.test(email)){
            setEmailRes("Email shopuls be in correct format");
            return;
        }
        // Password Verification
        if(password.trim() === ''){
            setPasswordRes("Please fill the password field");
            return;
          }
          else if(password.length < 3){
            setPasswordRes(
              "Password should be at least greater than 3 characters, Make Strong password!"
            )
            return;
          }
          // Confirm Password Verification
    if(confirmPassword.trim() === ''){
        setConfirmPasswordRes("Please fill the confirm password field");
        return;
      }
      else if(password !== confirmPassword){
        setConfirmPasswordRes(
          "Password doesn't match with confirm password"
        )
        return;
      }

      setSubmit(true);
      try {
        let res = await AxiosService.post(`/user/signup`, {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword
        });
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        if(res.status === 201){
          navigate('/home')

          toast.success(res.data.message)
          sessionStorage.setItem('token', res.data.token)
          sessionStorage.setItem('userData', JSON.stringify(res.data.userData))
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
      setSubmit(false);
    }
  return <>
  <div className="container">
    <img src='/src/assets/Images/logo.jpeg' alt='App Logo' className='logo-img'/>
    <h1 style={{textAlign:"center", color:"var(--theme)"}}>Expenses Tracker</h1>

    <Form>
      <div className='div-label'>
        <Form.Group className='mb-3'>
          <Form.Label className='label-text'> Your Name</Form.Label>
          <Form.Control type='text'
          placeholder='Enter your name...'
          value={name}
          onChange={(e)=>  setName(e.target.value)} required></Form.Control>
        </Form.Group>
        {nameRes && <p className='text-danger'>{nameRes}</p>}

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

      <Form.Group className="mb-3">
        <Form.Label className='label-text'>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
      </Form.Group>
      {confirmPasswordRes && <p className="text-danger">{confirmPasswordRes}</p>}
      </div>
      <br/>
      <div className='login-button'>
      <Button onClick={(e)=>handleSignup(e)} style={{color:"var(--white)", backgroundColor:"var(--theme)"}} disabled={submit} >
        Signup
      </Button>
      <br/>
      <br/>
      <div className='login-btn'>
        Already a Member? <Link to={'/'}>Login</Link>
      </div>
      </div>
    </Form>
  </div>
  </>
}

export default SignUp