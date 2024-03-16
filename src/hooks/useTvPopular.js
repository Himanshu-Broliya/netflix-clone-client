import { useDispatch } from "react-redux";
import { getTvPopular } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTvPopular = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TV_POPULAR}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTvPopular(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
