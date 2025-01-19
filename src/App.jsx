import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatBox from "./components/ChatBox";

import useDataStore from "./store/Store";
import Usermodal from "./components/UserModal";

export default function App() {
    return (
        <div className="w-full h-screen flex bg-background items-center justify-center">
            <Usermodal />
            <ChatBox />
        </div>
    );
}
