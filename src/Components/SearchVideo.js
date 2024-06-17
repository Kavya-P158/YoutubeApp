import React from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const SearchVideo = ({ video }) => {
    return (
        // <div className='grid grid-cols-4'>

        //     {

        //         video.map((videoitem) =>
        //             <Link to={"/watch?v=" + videoitem.id}>
        //                 <VideoCard key={videoitem.id} info={videoitem} />
        //             </Link>)
        //     }


        // </div>
        <div>This is search page</div>

    )
}

export default SearchVideo