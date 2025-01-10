import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ChatPage = () => {
    const [chats, setChats] = useState([]);
    const fetchChats =async()=>{
        const data = await axios.get("http://localhost:5000/api/chat");
        console.log("data = ", data);
        if(data) {
            setChats(data.data);
        }
        // const res = await fetch("/api/chat");
        // console.log("res = ", res);
        // // const data = await res.json();
        // const data = res.data;
        // console.log("data = ", data);
        // if (data.error) {
        //     throw new Error(data.error);
        // }
        // setChats(data.data);
    }
    useEffect(()=>{
        fetchChats();
    }, []);

    // useEffect(() => {
    //     const getConversations = async () => {
    //
    //         try {
    //             const res = await fetch("/api/chat");
    //             console.log("res = ", res);
    //             const data = await res.json();
    //             console.log("data = ", data);
    //             if (data.error) {
    //                 throw new Error(data.error);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //
    //     getConversations();
    // }, []);


    return (
        <div>ChatPage
            <div>{ chats.map((item, i)=><p key={item._id + i}>{item.chatName}</p>)}</div>
        </div>
    )
}
export default ChatPage
