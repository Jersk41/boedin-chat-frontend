import { useState, useEffect } from "react";
import DummyChat from "./DummyChat";
import DummyChatSelf from "./DummyChatSelf";

const ChatBox = () => {
    return (
        <div className="container h-[80vh] px-4 md:px-0 bg-background flex flex-col md:flex-row rounded-xl overflow-hidden gap-6">
            <div className="flex-[1] bg-secondary border-primary border-4 rounded-xl overflow-hidden"></div>
            <div className="flex-[3] flex flex-col bg-secondary text-black overflow-hidden rounded-xl border-4 border-primary">
                <div className="w-full h-20 bg-secondary flex items-center px-7 gap-4">
                    <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full overflow-hidden">
                        <img src="/fp-square.jpeg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold uppercase">IMPHNEN</h1>
                        <p className="font-normal">Ingin Menjadi Programmer Handal, Namun Enggan Ngoding</p>
                    </div>
                </div>

                <div className="max-w-full flex-1 bg-white overflow-y-auto overflow-x-hidden space-y-4 pr-6 pt-6">
                    <DummyChat user="IMPHNEN" msg="Hai, Saya Imphnen, Apa Kabar?" />
                    <DummyChatSelf user="Fathin" msg="Mahiru Istri Saya" />
                    <DummyChat user="IMPHNEN" msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi." />
                </div>
                <div className="w-full h-20 bg-secondary"></div>
            </div>
        </div>
    );
};

export default ChatBox;
