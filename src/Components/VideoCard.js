import React from 'react'

const VideoCard = (props) => {
    const { info } = props
    const { snippet, statistics } = info

    const channelImage = info?.snippet?.thumbnails?.medium?.url;
    return (
        <div className='flex cursor-pointer shadow-lg items-center justify-center'>


            <div className='w-72 h-90 p-2 m-2 object-fill '>

                <img className='rounded-lg hover:rounded-none' src={channelImage} ></img>
                <h1 className='font-bold py-2'>{snippet.title}</h1>
                <h2 className='text-gray-600'>{snippet.channelTitle}</h2>
                <h3>{statistics.viewCount}</h3>

            </div>
        </div>

    )
}

export const AdVideo = ({ info }) => {
    return (
        <div className='border border-red-900 p-1 m-1'>
            <VideoCard info={info} />
        </div>
    )
}
export default VideoCard