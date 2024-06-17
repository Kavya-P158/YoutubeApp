import React, { useEffect, useState } from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { GOOGLE_APIKEY, YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheSearch } from '../utils/searchSlice';
import SearchVideo from './SearchVideo';
const Head = () => {
    const dispatch = useDispatch()
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestion, setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const searchSlicedata = useSelector((store) => store.search)
    // const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {
            if (searchSlicedata[searchQuery]) {
                setSuggestion(searchSlicedata[searchQuery])
            }
            else

                getSearchSuggestions()
        }, 200)




        return () => {
            clearTimeout(timer);
        }
    }
        , [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        // console.log(json[1]);
        setSuggestion(json[1])
        dispatch(cacheSearch({
            [searchQuery]: json[1]
        }))
    }

    const fetchSearchVideos = async (item) => {

        const data = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=15&q=' + item + '&key=' + GOOGLE_APIKEY);
        const json = await data.json();
        console.log(json);
        <SearchVideo video={json.items} />
    }
    const handleSearchClick = (item) => {
        console.log(item); setShowSuggestion(false);
        setSearchQuery(item);

        // fetchSearchVideos(item);
        // // navigate("results?search_query=" + item)
        // navigate("results")

    }
    return (
        <div className='grid grid-flow-col p-2 m-2 justify-between'>

            <div className='flex col-span-1'>
                <img onClick={() => handleToggleMenu()} className='h-14 cursor-pointer' src="https://www.cuomomarine.it/wp-content/uploads/iconham.png" alt="menu" />
                <img className='h-14 cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqpDAlNBhTKmnIcY99fIUZTBjybFasao-8Q&s' alt="youtubeicon" />

            </div>
            <div className='col-span-10 text-center flex justify-center h-10 m-2'>

                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    // onBlur={() => setShowSuggestion(false)}
                    className='w-1/2  border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search' />
                <button className='border border-gray-400 p-2 rounded-r-full w-20 flex justify-center'>
                    <svg class="h-6 w-6 " fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                    </svg>
                </button>
                {
                    showSuggestion &&

                    <div className='absolute  my-10  w-[38rem] bg-white border '>

                        <ul className='' >

                            {
                                searchSuggestion.map((item) =>
                                    <li className=' border-gray-100 hover:bg-gray-100 cursor-pointer'> <button onClick={() => handleSearchClick(item)}>{item}</button></li>
                                )
                            }

                        </ul>
                    </div>}
            </div>
            <div className='col-span-1'>
                <img className='h-14' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' alt="userlogo" />
            </div>

        </div>
    )
}

export default Head