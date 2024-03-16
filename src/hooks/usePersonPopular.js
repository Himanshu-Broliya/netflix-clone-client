import { useDispatch } from "react-redux";
import { getPersonPopular } from "../redux/movieSlice";
import { option } from "../constant";
import axios from "axios";

export const usePersonPopular = async() => {
    const dispatch = useDispatch();
    try {
        let res = await axios.get(`${process.env.REACT_APP_PERSON_POPULAR}?${process.env.REACT_APP_API_KEY}`, option)
        dispatch(getPersonPopular(res.data.results))
    } catch (error) {
        console.log(error)
    }
}
