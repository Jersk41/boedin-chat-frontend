import {useState, useEffect} from 'react';


const ChatBox = () => {
    return (
        <div className="container h-[80vh] flex rounded-xl overflow-hidden gap-6">
            <div className="flex-[1] bg-blue-500 rounded-xl overflow-hidden"></div>
            <div className="flex-[3] bg-green-500 rounded-xl overflow-hidden"></div>
        </div>
    )
}

export default ChatBox
