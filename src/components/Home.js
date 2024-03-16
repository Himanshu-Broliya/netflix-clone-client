
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePersonPopular } from "../hooks/usePersonPopular";
import { useTredingMovies } from "../hooks/useTredingMovies";
import { useTrendingAll } from "../hooks/useTrendingAll";
import { useTrendingPerson } from "../hooks/useTrendingPerson";
import { useTrendingTv } from "../hooks/useTrendingTv";
import { useTvAiringToday } from "../hooks/useTvAiringToday";
import { useTvOnAir } from "../hooks/useTvOnAir";
import { useTvPopular } from "../hooks/useTvPopular";
import { useTvTopRated } from "../hooks/useTvTopRated";
import { Search } from "./Search";
import { MovieContainer } from "./MovieContainer";
import { MainContainer } from "./MainContainer";
import { useDispatch, useSelector } from "react-redux";
import Video from "./Video";
import { ImCross } from "react-icons/im";
import { setIndicator } from "../redux/movieSlice";

export default function Home() {
  const searchBtn = useSelector(store => store.movie.searchBtn);
  const indicator = useSelector(store => store.movie.indicator);
  const dispatch = useDispatch()


  // Custom Hooks
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useTredingMovies();
  useTrendingAll();
  useTrendingPerson();
  useTrendingTv();
  useTvAiringToday();
  useTvOnAir();
  useTvPopular();
  useTvTopRated();
  usePersonPopular();


  return (
    <div className="">
      {
        searchBtn ? <Search/> : 
                  <>
                    <MainContainer/>
                    <MovieContainer/>
                  </>
      }
      {
        indicator && searchBtn && <div className="w-[100%] top-0  absolute z-50 "><Video/><ImCross className="text-white text-2xl absolute right-[2rem] top-16 cursor-pointer" onClick={()=>{dispatch(setIndicator(false))}}/></div> 
      }
    </div>
  )
}
