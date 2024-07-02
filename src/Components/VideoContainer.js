import React, { useEffect, useState } from 'react'
import { YOUTUBEVIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideo } from './VideoCard';
const VideoContainer = () => {

    const [video, setVideo] = useState([]);
    useEffect(() => {

        fetchVideos()

    }, [])

    const fetchVideos = async () => {

        const data = await fetch(YOUTUBEVIDEO_API);
        const json = await data.json();
        // console.log(json.items);
        setVideo(json.items);
    }

    return (
        <div className='grid grid-cols-4'>

            {

                video.map((videoitem) =>
                    <Link to={"/watch?v=" + videoitem.id}>
                        <VideoCard key={videoitem.id} info={videoitem} />
                    </Link>)
            }


        </div>
    )
}

export default VideoContainer