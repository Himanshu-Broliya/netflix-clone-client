import { useDispatch } from "react-redux";
import { getTrendingPerson } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTrendingPerson = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TRENDING_PERSON}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTrendingPerson(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
