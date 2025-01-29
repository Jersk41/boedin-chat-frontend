import { useState, useEffect } from "react";

const DummyChatSelf = ({ user, msg, messageBefore }) => {
    const [isLongText, setIsLongText] = useState(false);
    const [message, setMessages] = useState(msg);

    const generateFlexibleRegex = (word) => {
        return word
            .split("")
            .map((char, index) => (index === 0 || index === word.length - 1 ? char : `[a-z]*`))
            .join("");
    };

    const replaceBadword = (text) => {
        // tambah sendiri banh :v
        const badword = ["anjing", "kontol"];
        const regex = new RegExp(`\\b(${badword.map(generateFlexibleRegex).join("|")})\\b`, "gi");

        return text.replace(regex, (match) => {
            return match[0] + "*".repeat(match.length - 2) + match[match.length - 1];
        });
    };

    const detectText = () => {
        if (message.length > 100) {
            setIsLongText(true);
        } else {
            setIsLongText(false);
        }
    };

    useEffect(() => {
        const sanitizedMessage = replaceBadword(msg);
        setMessages(sanitizedMessage);
        detectText();
    }, [msg]);

    const shouldDisplayName = !messageBefore || messageBefore.name !== user;

    return (
        <div className={`flex justify-end px-6 ${shouldDisplayName ? "mt-2" : "mt-1"}`}>
            <div className={`relative  w-max max-w-full min-h-4 bg-accent min-w-24 py-2 px-3 rounded-md`}>
                {shouldDisplayName && (
                    <>
                        <svg className="absolute [transform:rotateY(3.124rad)] top-0 -right-4 w-[20px]" viewBox="0 0 8 13" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px">
                            <title>tail-in</title>
                            <path opacity="0.13" fill="#606470" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                            <path fill="#606470" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                        </svg>
                        <p className="font-bold w-max text-success">{user}</p>
                    </>
                )}
                <div className={`whitespace-pre-wrap w-max max-w-full`}>
                    <div className="text-black break-words chat" dangerouslySetInnerHTML={{ __html: message || "" }} />
                </div>
            </div>
        </div>
    );
};

export default DummyChatSelf;
