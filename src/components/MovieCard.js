import { useDispatch } from 'react-redux';
import { setLatestDes, setLatestTitle, setNewId, setIndicator} from '../redux/movieSlice';
import { useState } from 'react';


export const MovieCard = ({ name, movie }) => {
  let movies = '';
  const dispatch = useDispatch();


  const imageClick = (prop) => {
    console.log(prop.title)
    dispatch(setLatestTitle(prop.title))
    dispatch(setLatestDes(prop.overview))
    dispatch(setNewId(prop.id))
    dispatch(setIndicator(true))
  }


  if(movie !== ""){
    movies = movie?.map((img, Key) => {
      return <img key={Key} src={`${process.env.REACT_APP_IMAGE_URL}${img.poster_path}`} alt='' className='rounded-sm h-[16rem] cursor-pointer' onClick={() => imageClick(img)} />
    })
   }
   else{
    return
   }




  return (
    <div>
        <h1 className='text-white text-3xl font-semibold py-3 px-5 '>{name}</h1>
        <div className='flex flex-row items-center gap-3 overflow-scroll no-scrollbar'>
        {movies}
        </div>
    </div>
  )
}
