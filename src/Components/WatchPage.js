import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const params = searchParams.get("v")
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='flex flex-col w-full'>
            <div className='p-5 m-5 flex flex-row'>
                <div>
                    <iframe
                        width="800"
                        height="400"
                        src={"https://www.youtube.com/embed/" + params}
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage