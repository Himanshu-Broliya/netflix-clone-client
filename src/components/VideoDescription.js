import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useSelector } from "react-redux";


export default function VideoDescription() {
  const title = useSelector(store => store.movie.title);
  const des = useSelector(store => store.movie.des);
  const newTitle = useSelector(store => store.movie.latestTitle);
  const newDes = useSelector(store => store.movie.latestDes);
  



  return (
    <div className="absolute w-[vw] pt-[19%] pl-20 no-scrollbar">
        <div>
            <h1 className="text-4xl text-white font-bold">{newTitle ?  newTitle : title}</h1>
            <p className="text-white w-1/3 mt-4">{newDes ? newDes : des}</p>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md flex items-center gap-1 hover:opacity-60 duration-300"><CiPlay1 className="text-lg" /><span >Play</span></button>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-md flex items-center gap-1 opacity-60 hover:opacity-100 duration-300"><CiCircleInfo className="text-lg"/><span >Watch More</span></button>
        </div>
    </div>
  )
}
