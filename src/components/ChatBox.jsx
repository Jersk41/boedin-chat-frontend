import { useState } from "react";
import DummyChat from "./DummyChat";
import DummyChatSelf from "./DummyChatSelf";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { usr: "IMPHNEN", msg: "Hai, Saya Imphnen, Apa Kabar?" },
        { usr: "Fathin", msg: "Mahiru Istri Saya" },
        {
            usr: "IMPHNEN",
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi. lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, excepturi.",
        },
    ]);
    // Current User e.g: Fathin
    const currentUser = "Fathin";

    const [inputMessage, setInputMessage] = useState("");
    const handleSendButton = () => {
        console.log("Pesan ada di component chat input", inputMessage);
        setMessages((prev) => [
            ...prev,
            {
                usr: currentUser,
                msg: inputMessage,
            },
        ]);
        setInputMessage("");
    };
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
                        <p className="font-normal">
                            Ingin Menjadi Programmer Handal, Namun Enggan
                            Ngoding
                        </p>
                    </div>
                </div>

                <div className="max-w-full flex-1 bg-white overflow-y-auto overflow-x-hidden space-y-4 pr-6 py-6">
                    {messages.map((message) => {
                        return message.usr === currentUser ? (
                            <DummyChatSelf
                                user={currentUser}
                                msg={message.msg}
                            />
                        ) : (
                            <DummyChat user={message.usr} msg={message.msg} />
                        );
                    })}
                </div>
                <div className="w-full h-20 bg-secondary p-4 mb-3 space-y-1">
                    <div className="w-full h-full flex flex-row space-x-2">
                        <Textarea
                            value={inputMessage}
                            onChange={(ev) => setInputMessage(ev.target.value)}
                            className="flex-grow bg-white text-background placeholder:text-background placeholder-opacity-50 resize-none font-sans font-normal text-black"
                            placeholder="Type your message here."
                            id="message"
                        />
                        <Button
                            onClick={handleSendButton}
                            className="w-12 h-12 border bg-accent text-background "
                        >
                            <Send className="w-6 h-6" />
                        </Button>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                        Mohon untuk tetap sopan dalam berkomunikasi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
