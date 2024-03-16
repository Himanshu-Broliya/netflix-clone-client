import React, { useEffect } from 'react'
import { logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux"
import { getNowPlayingMovies, setSearchBtn } from "../redux/movieSlice";


export default function Header() {
  const auth = localStorage.getItem('token');
  const name = localStorage.getItem('user')
  const btn = useSelector(store => store.movie.searchBtn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!auth){
      navigate('/')
    }
  })

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then(async (result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/')
      }
    });
  }

  const searchToggle = ()=>{
    dispatch(setSearchBtn(!btn))
  }
  
  return (
    <div className='absolute z-10 flex w-full justify-between items-center px-10 py-3 bg-gradient-to-b from-black '>
      <img src={logo} alt='Netflix' className='h-12  ' />

    {
      auth && 
        <div className='flex flex-row gap-10 '>
          <div className='flex gap-2 cursor-pointer'>
            <IoIosArrowDropdownCircle className='text-[22px] text-white mt-[1px]' />
            <h2 className='font-semibold text-white '>{name}</h2>
          </div>
          <ul className='flex gap-10'>
            <li className=' cursor-pointer font-medium text-white '>TV Shows</li>
            <li className=' cursor-pointer font-medium text-white '>Movies</li>
            <li className=' cursor-pointer font-medium text-white '>New&Popular</li>
          </ul>
          <button className='font-semibold bg-red-700 items-center text-white rounded-md px-5 py-2 transition-all ease-in-out hover:scale-110 duration-500' onClick={searchToggle}>{btn ? "Home" : "Search Movie"}</button>
          <button className='font-semibold bg-red-700 items-center text-white rounded-md px-5 py-2 transition-all ease-in-out hover:scale-110 duration-500' onClick={logout}>Logout</button>
        </div>
    }
    </div>
  )
}
