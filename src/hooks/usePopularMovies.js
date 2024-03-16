import { useDispatch } from "react-redux";
import { getPopularMovies } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const usePopularMovies = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_POPULAR}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
