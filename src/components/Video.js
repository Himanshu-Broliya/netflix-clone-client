import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { option } from "../constant";

export default function Video() {
    const id = useSelector(store => store.movie.id);
    const newId = useSelector(store => store.movie.newId);
    const [trailerId ,setTrailerId] = useState('');

    useEffect(() => {
        if(newId){
            getVidos(newId)
        }else{
            getVidos(id)
        }
    }, [id,newId])
    const getVidos = async (videoId) => {
        if (id || newId) {
            try {
                let res = await axios.get(`${process.env.REACT_APP_VIDEO_URL}/${videoId}/videos?${process.env.REACT_APP_API_KEY}`, option)
                let trailer = res?.data?.results?.filter((item)=>{
                    return  item.type === 'Trailer'
                })
                let featurette = res?.data?.results?.filter((item)=>{
                    return  item.type === "Featurette"
                })
                if(trailer.length > 0){
                    setTrailerId(trailer[0].key)
                }else{
                    setTrailerId(featurette[0].key)
                }

            } catch (error) {
                console.log(error)
            }
        }else{
            return
        }
    }
    return (
        <div className="absolute no-scrollbar w-full">
            {
                trailerId && 
                <iframe className='aspect-video w-full h-screen'
                src={`https://www.youtube.com/embed/${trailerId}?si=Rg9Jh94GP1xzUgxY&autoplay=1&mute=1`} 
                    title="YouTube video player"
                    allowFullScreen>
                </iframe>
            }
        </div>
    )
}
