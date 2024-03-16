import React, { useState } from 'react'
import {MovieCard} from './MovieCard'
import axios from 'axios'
import { option } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMovie } from '../redux/searchSlice';

export const Search = () => {
    const dispatch = useDispatch()
    const [name,setName] = useState('')
    const searchedMovies = useSelector(store => store.search)
    const [isLoading,setIsLoading] = useState(false)
    const [isResult,setIsResult] = useState(false)


    const searchMovie = async()=>{
        if(name.length > 0){
            try {
                setIsLoading(true)
                let res = await axios.get(`${process.env.REACT_APP_SEARCH_MOVIE}${name}&${process.env.REACT_APP_API_KEY}`,option)
                const movie = res.data.results; 
                if(movie.length > 0){
                    setIsResult(false)
                    dispatch(getSearchedMovie({name, movie}))
                }else{
                    setIsResult(true)
                }
            } catch (error) {
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }
        setName('')
    }


    return (
        <>
        <div className='pt-[10%] flex justify-center'>
            <div className='w-[60%]  rounded-lg'>
                <div className='w-full flex  justify-between py-2 px-4 rounded-lg shadow-lg bg-gray-200'>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-full border-none outline-none text-lg bg-gray-200' placeholder='Search Movies....' />
                    <button className='bg-red-700 px-5 py-2 rounded-md text-white font-semibold' onClick={searchMovie}>{isLoading ? "loading..." : "Search"}</button>
                </div>
            </div>
        </div>
        {
            isResult ? <h1 className='text-3xl font-semibold'>No Match Found!</h1> : searchedMovies && <MovieCard name={searchedMovies.searchedMovie}  movie={searchedMovies.movies}/>
        }
        </>
    )
}
