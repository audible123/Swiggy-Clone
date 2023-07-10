import React,{useState} from 'react'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function SignUp() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [error,setError]=useState("")

  const validatePassword =()=> {
    let isValid = true 
    if(password != '' && confirmPassword !==''){
      if(password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  setError('')
  if(validatePassword()) {
    // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const loginUser = userCredential.user
          console.log({loginUser});
        })
      .catch(err => setError(err.message))
  }
  setEmail('')
  setPassword('')
  setConfirmPassword('')
  };


  return (
    <div className='page flex justify-center items-center h-[100vh]'>
    <div className='auth shadow-2xl h-auto bg-white'>
      <h1 
      className="font-bold text-2xl">
        SignUp</h1>
      {error && <div className='auth__error'>{error}</div>}

      <div 
      className="mt-12">
      <form onSubmit={handleSubmit} name='registration_form'>
        <input 
          type='email' 
          value={email}
          placeholder="Enter your email"
          className="shadow-xl"
          required
          onChange={e => setEmail(e.target.value)}/>

        <input 
          type='password'
          value={password} 
          required
          className="shadow-xl"
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}/>

          <input 
          type='password'
          value={confirmPassword} 
          className="shadow-xl"
          required
          placeholder='Confirm password'
          onChange={e => setConfirmPassword(e.target.value)}/>

        <button type='submit'
        className="bg-[#cd9042]">Register</button>
      </form>
      </div>


      <span className="text-xs">
        Already have an account?  
        <Link 
        className="text-[#cd9042]"
        to='/login'>login</Link>
      </span>
    </div>
  </div>
  );
}

export default SignUp