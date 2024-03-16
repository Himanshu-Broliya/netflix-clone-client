import { useEffect, useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import axios from 'axios';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [isUser, setIsUser] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordToggle, setPasswordToggle] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem('token');
  const [isLoading , setIsLoading] = useState(false)

  useEffect(()=>{
    if(auth){
      navigate('/home')
    }
  })

  const loginHandlar = () => {
    setIsUser(!isUser)
  }

  const handleData = async (e) => {
    e.preventDefault();
    if(isUser){
      // for login api
      const data = {email,password};
      try {
        setIsLoading(true);
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,data);
        if(result.data.status){
          toast.success('Login Successfull!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          localStorage.setItem('token',result.data.auth);
          localStorage.setItem('user',result.data.user.name);
          navigate('/home')
        }else{
          toast.error(result.data.msg, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      } catch (error) {
        toast.error("Server error. Please try again later!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } finally{
        setIsLoading(false)
      }
    }else{
      // for register api
      const data = {name,email,password};
      try {
        setIsLoading(true);
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,data);
        if(result.data.status){
          toast.success('User created successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          localStorage.setItem('token',result.data.auth);
          localStorage.setItem('user',result.data.result.name);
          navigate('/home');
        }else{
          toast.error(result.data.msg, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      } catch (error) {
        toast.error("Server error. Please try again later!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } finally{
        setIsLoading(false)
      }
    }
  }

  const showPassword = (e) => {
    const input = document.getElementById('passwordField');
    input.type = "text"
    setPasswordToggle(!passwordToggle)
  }


  const hidePassword = (e) => {
    const input = document.getElementById('passwordField');
    input.type = "password"
    setPasswordToggle(!passwordToggle)
  }



  return (
    <div >
      <div className=' absolute'>
        <img src='https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg' alt='banner' className='h-[100vh] w-[100vw] bg-cover opacity-95'></img>
      </div>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col w-[23rem]  bg-black opacity-95 items-center px-20 py-7 rounded-md'>
        <form onSubmit={handleData}>
          <h1 className='text-white text-3xl font-bold text-center mb-5'>{isUser ? "Login" : "Signup"}</h1>
          {
            !isUser &&
            <>
              <label className='text-white '>Full Name</label>
              <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} className='px-4 py-3 rounded-sm text-white mb-4 bg-gray-900 outline-none w-[19rem]' />
            </>
          }

          <label className='text-white'>Email</label>
          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='px-4 py-3 rounded-sm text-white mb-4 bg-gray-900 outline-none w-[19rem]' />

          <label className='text-white '>Password</label>
          <input type='password' id='passwordField' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='px-4 py-3 rounded-sm text-white mb-4 bg-gray-900 outline-none w-[19rem]' />
          {passwordToggle ? <IoEye className='text-white relative top-[-50px] left-[17rem] text-xl cursor-pointer' onClick={hidePassword} /> : <IoMdEyeOff className='text-white relative top-[-50px] left-[17rem] text-xl cursor-pointer' onClick={showPassword} />}

          <button type='submit' className=' bg-red-600 px-10 py-3 text-white font-bold rounded-sm w-[19rem] mt-1'>{`${isLoading ? "loading...":(isUser ? "Login" : "Sign Up")}`  }</button>
          {isUser ? <p className='text-white text-sm mt-1'>New to netflix?<span className='text-sm text-blue-600 cursor-pointer ml-3' onClick={loginHandlar}>Signup</span></p> : <p className='text-white text-sm mt-1'>Already an account?<span className='text-sm text-blue-600 cursor-pointer ml-3' onClick={loginHandlar}>Login</span></p>}
        </form>
      </div>
    </div>
  )
}
