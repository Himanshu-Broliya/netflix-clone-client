import { useDispatch } from "react-redux";
import { getTvTopRated } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTvTopRated = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TV_TOP_RATED}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTvTopRated(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
