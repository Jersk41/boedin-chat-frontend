import React, { useState, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";

import useDataStore from "@/store/Store";
export default function Hamburger() {
    const setOpenModal = useDataStore((state) => state.setOpenModal);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
        setOpenModal(true);
    };

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div className="relative flex-shrink-0">
            <button className=" w-[40px] h-[40px]  flex items-center justify-center rounded-full transition-all hover:bg-white/50" onClick={handleToggle}>
                <EllipsisVertical />
            </button>

            <div className={`rounded-xl overflow-hidden absolute top-12 right-0 min-w-7 z-10 shadow-xl transition-all duration-500 bg-background ${open ? "[clip-path:circle(141.5%_at_100%_0)]" : "[clip-path:circle(0.4%_at_100%_0)]"} border border-background`}>
                <button className="w-full px-5 py-2 text-nowrap text-md text-white transition-all hover:bg-white hover:text-background" onClick={handleClick}>
                    Edit Nama
                </button>
                <a href="https://discord.gg/imphnen" className="block w-full px-5 py-2 text-nowrap text-md text-white transition-all hover:bg-white hover:text-background">
                    Join Discord!
                </a>
            </div>
        </div>
    );
}
