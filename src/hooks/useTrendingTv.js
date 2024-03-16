import { useDispatch } from "react-redux";
import { getTrendingTv } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTrendingTv = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TRENDING_TV}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTrendingTv(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
