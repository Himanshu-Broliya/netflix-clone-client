import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useUpcomingMovies = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_UPCOMING_MOVIE}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getUpcomingMovies(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
