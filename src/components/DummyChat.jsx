import { useState, useEffect, useRef } from "react";

const DummyChat = ({ name, content, messageBefore }) => {
    const [isLongText, setIsLongText] = useState(false);
    const message = useRef(content);

    const detectText = () => {
        if (message.current.length > 100) {
            setIsLongText(true);
        } else {
            setIsLongText(false);
        }
    };

    useEffect(() => {
        detectText();
    }, [message]);

    const shouldDisplayName = !messageBefore || messageBefore.name !== name;

    return (
        <div className={`px-6 ${shouldDisplayName ? "mt-2" : "mt-1"}`}>
            <div className={`relative w-max max-w-full min-h-4 min-w-24 bg-primary py-2 px-3 rounded-md`}>
                {shouldDisplayName && (
                <>
                    <svg className="absolute top-0 -left-4 w-[20px]" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px">
                        <title>tail-in</title>
                        <path opacity="0.13" fill="#36393e" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                        <path fill="#36393e" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                    </svg>
                    <p className="font-bold w-max text-destructive">{name}</p>
                </>
                )}
                <div className={`whitespace-pre-wrap w-max ${isLongText ? "max-w-full" : ""}`}>
                    <div className="text-black break-words chat" dangerouslySetInnerHTML={{ __html: content || "" }} />
                </div>
            </div>
        </div>
    );
};

export default DummyChat;
