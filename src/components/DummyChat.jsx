import { useState, useEffect } from "react";

const DummyChat = ({ user, msg }) => {
    const [isLongText, setIsLongText] = useState(false);
    const message = msg;

    const detectText = () => {
        if (message.length > 30) {
            setIsLongText(true);
        } else {
            setIsLongText(false);
        }
    };

    useEffect(() => {
        detectText();
    }, [message]);

    return (
        <div className="px-6">
            <div className={`relative ${isLongText ? "max-w-full" : "w-max"} min-h-4 min-w-32 bg-primary p-4 rounded-md`}>
                <svg className="absolute top-0 -left-4 w-[20px]" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px">
                    <title>tail-in</title>
                    <path opacity="0.13" fill="#36393e" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                    <path fill="#36393e" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                </svg>
                <p className="font-bold w-max text-destructive">{user}</p>
                <div className={`whitespace-pre-wrap w-max ${isLongText ? "max-w-full" : ""}`}>
                    <div className="text-black break-words" dangerouslySetInnerHTML={{__html: msg || ""}} />
                </div>
            </div>
        </div>
    );
};

export default DummyChat;
