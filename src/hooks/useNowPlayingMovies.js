import axios from "axios"
import { option } from "../constant"
import { useDispatch } from "react-redux"
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_NOW_PLAYING}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getNowPlayingMovies(res?.data?.results))
        // console.log(res?.data?.results)
    } catch (error) {
        console.log(error)
    }
}

export default useNowPlayingMovies;