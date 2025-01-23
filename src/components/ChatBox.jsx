import { useEffect, useRef, useState } from "react";
import DummyChat from "./DummyChat";
import DummyChatSelf from "./DummyChatSelf";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send, ChevronLeft, ChevronRight } from "lucide-react";
import useDataStore from "@/store/Store";
import Hamburger from "./Hamburger";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ChatBox = () => {
  const [openInput, setOpenInput] = useState(false);
  const nameStore = useDataStore((state) => state.name);
  const quillRef = useRef(null);
  const [sidebarVisible, setSidebarVisible] = useState(true); // State untuk sidebar

  const [messages, setMessages] = useState([]);
  const currentUser = nameStore;
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);

  /*
        Kode di bawah hanya bersifat backup,
        jika websocket sedang maintenance.
    */

  // const handleSendButton = () => {
  //     // console.log("Pesan ada di component chat input", inputMessage);
  //     setMessages((prev) => [
  //         ...prev,
  //         {
  //             name: currentUser,
  //             message: inputMessage,
  //             time: new Date().toISOString(),
  //         },
  //     ]);
  //     setInputMessage("");
  // };

  /*
        End of backup code
    */

  const handleSendButton = () => {
    const editor = quillRef.current?.getEditor();
    let content = editor?.root.innerHTML.trim(); // Ambil konten rich text sebagai HTML

    if (!content || content === "<p><br></p>") {
      return; // Jangan kirim jika kosong atau hanya newline
    }
    content = content
      .replace(/<p><br><\/p>$/, "")
      .replace('<span class="ql-cursor">﻿<\/span>', ""); // Ini buat hilanging space kosong di message

    const messageData = {
      name: currentUser,
      message: content,
      time: new Date().toISOString(),
    };

    if (socket) {
      socket.send(JSON.stringify([messageData])); // Kirim pesan melalui WebSocket
    }

    editor.setContents([]); // Bersihkan editor (hapus konten)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendButton();
    }
  };

  useEffect(() => {
    if (!currentUser) return;

    const ws = new WebSocket("wss://budin.azumidev.web.id/ws");
    setSocket(ws);

    ws.onopen = () => console.log("WebSocket connected");
    ws.onclose = () => console.log("WebSocket disconnected");
    ws.onerror = (error) => console.error("WebSocket error:", error);

    ws.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data);
      if (incomingMessage.length > 49) {
        incomingMessage.shift();
      }

      incomingMessage.map((msg) =>
        setMessages((prev) => {
          // Tambahkan pesan baru ke array
          const newMessages = [
            ...prev,
            {
              name: msg.name,
              message: msg.message,
              time: msg.time,
            },
          ];

          // Jika jumlah pesan lebih dari 29, ambil hanya 29 pesan terakhir
          if (newMessages.length > 29) {
            newMessages.shift(); // Hapus pesan pertama (terlama)
          }

          return newMessages;
        }),
      );

      // console.log(incomingMessage);
      // console.log(messages);
    };

    return () => ws.close();
  }, [currentUser]);

  const chatContainer = useRef();

  useEffect(() => {
    if (chatContainer.current) {
      setTimeout(() => {
        chatContainer.current.scrollTo({
          top: chatContainer.current.scrollHeight,
          behavior: "smooth",
        });
      }, 1);
    }
  }, [messages]);

  useEffect(() => {
    if (nameStore) {
      setOpenInput(true);
    } else {
      setOpenInput(false);
    }
  }, [nameStore]);

  return (
    <div className="h-[95vh] xl:h-[90vh] w-[95vw] px-0 bg-background flex flex-col md:flex-row rounded-xl overflow-hidden gap-6">
       {sidebarVisible && (
        <div className="flex-[1] border-primary border-4 bg-primary text-white rounded-xl overflow-hidden hidden xl:block">
          <img
            src="https://ik.imagekit.io/9hpbqscxd/SG/image-83.jpg?updatedAt=1705798245623"
            alt=""
          />
          <div>
            <h1 className="font-bold text-center text-2xl mt-3 mb-3">
              Eyyoo <span className="text-success">{currentUser}</span>
            </h1>
            <h3 className="font-bold text-center text-xl mb-1">Shortcut</h3>
            <ul className="list-inside list-disc pl-5 text-sm text-gray-600">
              <li>
                <strong>Bold:</strong> <code>Ctrl + B</code>
              </li>
              <li>
                <strong>Italic:</strong> <code>Ctrl + I</code>
              </li>
              <li>
                <strong>Underline:</strong> <code>Ctrl + U</code>
              </li>
              <li>
                <strong>Bullet List:</strong> <code>Ctrl + Shift + 8</code>
              </li>
              <li>
                <strong>Numbered List:</strong> <code>Ctrl + Shift + 7</code>
              </li>
              <li>
                <strong>Insert Link:</strong> Use the toolbar
              </li>
            </ul>
            <h3 className="font-bold text-center text-xl mb-1 mt-6">Rules</h3>
            <ul className="list-inside list-disc pl-5 text-sm text-gray-600">
              <li>Be respectful and kind to others.</li>
              <li>No spamming or excessive messages.</li>
              <li>Avoid offensive language.</li>
              <li>Keep the conversation on-topic.</li>
              <li>Do not share personal information.</li>
            </ul>
          </div>
        </div>
      )}
        <div
          className={`flex flex-[4] flex-col bg-primary text-white overflow-hidden rounded-xl border-4 border-primary`}
        >
        <div className="w-full h-20 bg-primary flex items-center justify-between px-3 xl:px-7 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] bg-yellow-500 rounded-full overflow-hidden">
              <img src="/fp-square.jpeg" alt="" />
            </div>
            <div>
              <h1 className="font-bold uppercase">IMPHNEN</h1>
              <p className="font-normal truncate w-[300px] md:w-full">
                Ingin Menjadi Programmer Handal, Namun Enggan Ngoding
              </p>
            </div>
          </div>
          <Hamburger />
        </div>

        <div
          ref={chatContainer}
          className="max-w-full chat-container flex-1 bg-background overflow-y-auto overflow-x-hidden space-y-2 pr-6 py-6"
        >
          {/* DISINI TEMPAT UNTUK MELAKUKAN CHAT, WEB SOCKET HARUS TERHUBUNG KE SINI */}

          {messages.map((message, index) => {
            return message.name === currentUser ? (
              <DummyChatSelf
                key={index}
                user={currentUser}
                msg={message.message}
              />
            ) : (
              <DummyChat
                key={index}
                user={message.name}
                msg={message.message}
              />
            );
          })}
        </div>
        <div className="w-full h-20 bg-primary py-4 px-2 ">
          <div className="w-full h-full flex flex-row space-x-2">
            {openInput ? (
              <>
                <Button
                  onClick={() => setSidebarVisible(!sidebarVisible)}
                  className="w-12 h-12 bg-accent hidden xl:block text-white rounded-full"
                >
                  {sidebarVisible ? <ChevronLeft /> : <ChevronRight />}
                </Button>
                <ReactQuill
                  ref={quillRef}
                  theme="snow"
                  id="message"
                  className="flex-grow bg-accent text-white rounded-md border-none border-accent placeholder:text-white placeholder-opacity-50 resize-none font-sans font-normal"
                  onKeyDown={handleKeyDown}
                  modules={{ toolbar: false }}
                  placeholder="Type your message..."
                />
                {/*<Textarea
                                    value={inputMessage}
                                    onChange={(ev) =>
                                        setInputMessage(ev.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                    className="flex-grow bg-white text-background placeholder:text-background placeholder-opacity-50 resize-none font-sans font-normal text-black"
                                    placeholder="Type your message here."
                                    id="message"
                                />*/}
                <Button
                  onClick={handleSendButton}
                  className="w-12 h-12 border bg-accent text-white border-accent"
                >
                  <Send className="w-6 h-6" />
                </Button>
              </>
            ) : (
              <>
                <div className="w-full h-full flex items-center justify-center">
                  <p>Silakan isi nama dulu untuk mulai chat!</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
