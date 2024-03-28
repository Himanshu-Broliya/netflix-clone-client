import React, { useEffect, useState } from 'react'
import { logo } from '../assets'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from "react-redux"
import { getNowPlayingMovies, setSearchBtn } from "../redux/movieSlice";
import { IoMenu } from 'react-icons/io5'


export default function Header() {
  const auth = localStorage.getItem('token');
  const name = localStorage.getItem('user')
  const btn = useSelector(store => store.movie.searchBtn)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (!auth) {
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
    setMenu(!menu)
  }

  const searchToggle = () => {
    dispatch(setSearchBtn(!btn))
    setMenu(!menu)
  }


  const verticalMenu = () => {
    setMenu(!menu)
  }


  return (
    <div className='absolute z-10 flex w-full justify-between items-center md:px-10 py-3 bg-gradient-to-b from-black '>
      <img src={logo} alt='Netflix' className='h-8 md:h-12 ml-5 md:ml-0' />

      {
        auth &&
        <div className='hidden md:flex flex-row gap-10 '>
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


      <div className='md:hidden ml-16 flex gap-2 cursor-pointer '>
        <IoIosArrowDropdownCircle className='text-[22px] text-white mt-[1px]' />
        <h2 className='font-semibold text-white '>{name}</h2>
      </div>
      <IoMenu className='text-3xl text-white cursor-pointer mr-5 md:mr-0 md:hidden' onClick={verticalMenu} />


      {
        menu && <div className='flex flex-col items-center gap-5 absolute top-0 py-16 w-full h-screen px-0 bg-black opacity-90 '>
          <ul className='flex flex-col gap-5 items-center'>
            <li className=' cursor-pointer font-medium text-white ' onClick={verticalMenu}>TV Shows</li>
            <li className=' cursor-pointer font-medium text-white ' onClick={verticalMenu}>Movies</li>
            <li className=' cursor-pointer font-medium text-white ' onClick={verticalMenu}>New&Popular</li>
          </ul>
          <button className='font-semibold bg-red-700 items-center text-white rounded-md px-5 py-2 transition-all ease-in-out hover:scale-110 duration-500' onClick={searchToggle} >{btn ? "Home" : "Search Movie"}</button>
          <button className='font-semibold bg-red-700 items-center text-white rounded-md px-5 py-2 transition-all ease-in-out hover:scale-110 duration-500' onClick={logout} >Logout</button>
        </div>
      }

    </div>
  )
}
