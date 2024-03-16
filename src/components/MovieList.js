import { useSelector } from 'react-redux';
import { MovieCard } from './MovieCard';


export const MovieList = () => {
    const movie = useSelector(store => store.movie);

    return (
        <div >
            {movie &&
                <>
                    <MovieCard name={"Now Playing Movies"} movie={movie.nowPlayingMovies}/>
                    <MovieCard name={"Popular Movies"} movie={movie.popularMovies}/>
                    <MovieCard name={"Upcoming Movies"} movie={movie.upcomingMovies}/>
                    <MovieCard name={"Top Rated Movies"} movie={movie.topRatedMovies}/>
                    <MovieCard name={"Trending Movies"} movie={movie.trendingMovies}/>
                    <MovieCard name={"Trending TV Shows"} movie={movie.trendingTv}/>
                    <MovieCard name={"TV Shows Airing Today"} movie={movie.tvAiringToday}/>
                    <MovieCard name={"TV Shows On Air"} movie={movie.tvOnAir}/>
                    <MovieCard name={"Popular TV shows "} movie={movie.tvPopular}/>
                    <MovieCard name={"Top Rated TV Shows"} movie={movie.tvTopRated}/>
                    <MovieCard name={"Trending All"} movie={movie.trendingAll}/>
                    {/* <MovieCard name={"Popular Person"} movie={movie.personPopular}/> */}

                </>
            }
        </div>
    )
}
