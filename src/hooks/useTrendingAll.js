import { useDispatch } from "react-redux";
import { getTrendingAll } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTrendingAll = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TRENDING_ALL}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTrendingAll(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
