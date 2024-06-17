import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import generateRandomName from '../utils/randomNameHelper';
import generateRandomComment from '../utils/randomCommentsHelper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const userData = useSelector((store) => store.chat.messages);
    console.log(userData[0])

    const [newmessage, setNewMessage] = useState("");
    useEffect(() => {

        const i = setInterval(() => {

            console.log("API Polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomComment()
            }))
        }, 2000);

        return () => clearInterval()
    }, [])

    const Pushmessaage = () => {
        dispatch(addMessage({
            name: "Kavya",
            message: newmessage
        }));
        setNewMessage("")
    }
    return (
        <>
            <div className='m-2 p-2 border border-black w-full h-[400px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>

                {
                    userData.map((data) => <ChatMessage name={data.name} message={data.message} />)
                }


            </div>
            <div className='w-full p-2 m-2 flex flex-row'>
                <input className='p-2 ' type='text' placeholder='Enter a message' value={newmessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button className='p-2 bg-red-600 text-white' onClick={() => Pushmessaage()}>Send</button>
            </div>
        </>
    )
}

export default LiveChat