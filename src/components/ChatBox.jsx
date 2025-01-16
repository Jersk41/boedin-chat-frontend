import {useState, useEffect} from 'react';


const ChatBox = () => {
    return (
        <div className="container h-[80vh] bg-[#FDFAFA] flex rounded-xl overflow-hidden gap-6">
            <div className="flex-[1] bg-[#1CBBBC] rounded-xl overflow-hidden"></div>
            <div className="flex-[3] flex flex-col bg-[#FDFAFA] overflow-hidden rounded-xl border-4 border-[#1CBBBC]">
                <div className="w-full h-20 bg-[#17afb0] flex items-center px-7 gap-4">
                    <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full overflow-hidden">
                        <img src="/fp-square.jpeg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold uppercase text-white">IMPHNEN</h1>
                        <p className="font-normal text-white">Ingin Menjadi Programmer Handal, Namun Enggan Ngoding</p>
                    </div>
                </div>

                <div className="flex-1 bg-white"></div>
                <div className="w-full h-20 bg-[#17afb0]"></div>
            </div>
        </div>
    )
}

export default ChatBox
