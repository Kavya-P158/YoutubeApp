import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Link, useLocation } from 'react-router-dom';
import { GOOGLE_APIKEY } from '../utils/constant';
const SearchVideo = ({ video }) => {

    const location = useLocation();
    const value = location.state;

    console.log(value);
    const [searchVideos, setSearchVideos] = useState([]);
    useEffect(() => {
        fetchSearchVideos(value);
    }, []);

    const fetchSearchVideos = async (value) => {

        const data = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=15&q=' + value + '&key=' + GOOGLE_APIKEY);
        const json = await data.json();

        setSearchVideos(json.items)
        console.log(json.items);
        //     <SearchVideo video={json.items} />
        console.log(searchVideos)
    }
    return (
        <div className='grid grid-cols-4'>

            {

                searchVideos.map((videoitem) =>
                    // <Link to={"/watch?v=" + videoitem.id}>
                    <VideoCard key={videoitem.id} info={videoitem} />
                )
                // </Link>)
            }


        </div>


    )
}

export default SearchVideo