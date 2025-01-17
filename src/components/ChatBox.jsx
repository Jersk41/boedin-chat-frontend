import {useState, useEffect} from 'react';
import DummyChat from './DummyChat';

const ChatBox = () => {
    return (
        <div className="container h-[80vh] bg-white flex rounded-xl overflow-hidden gap-6">
            <div className="flex-[1] bg-primary rounded-xl overflow-hidden"></div>
            <div className="flex-[3] flex flex-col bg-white overflow-hidden rounded-xl border-4 border-primary">
                <div className="w-full h-20 bg-secondary flex items-center px-7 gap-4">
                    <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full overflow-hidden">
                        <img src="/fp-square.jpeg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold uppercase text-white">IMPHNEN</h1>
                        <p className="font-normal text-white">Ingin Menjadi Programmer Handal, Namun Enggan Ngoding</p>
                    </div>
                </div>

                <div className="max-w-full flex-1 bg-white overflow-y-auto space-y-4 pr-6 pt-6">
                    <DummyChat user="IMPHNEN" msg="Hai, Saya Imphnen, Apa Kabar?" />
                    <DummyChat user="IMPHNEN" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi." />
                </div>
                <div className="w-full h-20 bg-secondary"></div>
            </div>
        </div>
    )
}

export default ChatBox
