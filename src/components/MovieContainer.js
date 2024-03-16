import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setDes, setId, setLatestDes, setLatestTitle, setNewId, setTitle } from '../redux/movieSlice';
import { MovieList } from './MovieList';


export const MovieContainer = () => {
  const movie = useSelector(store => store.movie);
  const [npm, setNpm] = useState('');
  const dispatch = useDispatch();
  let npms = ''

  useEffect(() => {
    if (movie.nowPlayingMovies !== null) {
      setNpm(movie.nowPlayingMovies)
    }
  }, [movie])


  useEffect(() => {
    if (movie.nowPlayingMovies !== null) {
      dispatch(setTitle(movie.nowPlayingMovies[0].title))
      dispatch(setDes(movie.nowPlayingMovies[0].overview))
      dispatch(setId(movie.nowPlayingMovies[0].id))
    }
  }, [movie])

  const imageClick = (prop) => {
    console.log(prop.original_title,prop.overview)
    dispatch(setLatestTitle(prop.title))
    dispatch(setLatestDes(prop.overview))
    dispatch(setNewId(prop.id))

  }


  if(npm !== ""){
    npms = npm.map((img, Key) => {
      return <img key={Key} src={`${process.env.REACT_APP_IMAGE_URL}${img.poster_path}`} alt='' className='rounded-sm h-[16rem] cursor-pointer' onClick={() => imageClick(img)} />
    })
   }
   else{
    return
   }




  return (
    <div className='absolute top-[100%] bg-black'>
      <MovieList/>
    </div>
  )
}
