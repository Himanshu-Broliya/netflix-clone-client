import { useDispatch } from "react-redux";
import { getTvOnAir } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const useTvOnAir = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_TV_ON_THE_AIR}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getTvOnAir(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
