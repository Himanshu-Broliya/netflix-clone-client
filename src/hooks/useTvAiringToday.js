import { useDispatch } from "react-redux";
import { getTvAiringToday } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTvAiringToday = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TV_AIRING_TODAY}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTvAiringToday(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
