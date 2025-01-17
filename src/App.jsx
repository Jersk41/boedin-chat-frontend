import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatBox from "./components/ChatBox";

export default function App() {
    return (
        <div className="w-full h-screen flex bg-background items-center justify-center">
            <ChatBox />
        </div>
    );
}
