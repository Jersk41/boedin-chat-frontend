import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatBox from "./components/ChatBox";

import Usermodal from "./components/UserModal";
import EditModal from "./components/EditModal";

export default function App() {
    return (
        <div className="w-full h-screen flex bg-background items-center justify-center">
            <Usermodal />
            <EditModal />
            <ChatBox />
        </div>
    );
}
