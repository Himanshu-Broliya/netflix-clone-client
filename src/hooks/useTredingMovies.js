import { useDispatch } from "react-redux";
import { getTrendingMovies } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTredingMovies = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TRENDING_MOVIE}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTrendingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
