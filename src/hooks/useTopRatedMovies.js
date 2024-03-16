import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTopRatedMovies = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TOP_RATED_MOVIE}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
