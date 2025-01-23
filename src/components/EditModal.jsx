import { useState, useEffect, useRef } from "react";
import useDataStore from "@/store/Store";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// import { contactFormAction } from '@/lib/actions'
import { Check } from "lucide-react";

export default function EditModal() {
    const container = useRef(null);
    const openModal = useDataStore((state) => state.openModal);
    const closeModal = useDataStore((state) => state.removeOpenModal);
    // const [open, setOpen] = useState(openModal);
    const [name, setName] = useState("");

    // const nameStore = useDataStore((state) => state.name);
    const addNameStore = useDataStore((state) => state.setName);
    const localName = localStorage.getItem("name");

    const handleName = (e) => {
        e.preventDefault();
        if(!name || name.trim() ==='') return;
        localStorage.setItem("name", name.trim());
        addNameStore(name.trim());
        closeModal();
    };

    const resetName = (e) => {
        e.preventDefault();
        setName("");
        addNameStore(localName);
        closeModal();
    };

    const disableModal = () => {
        setOpen(true);
        setTimeout(() => {
            container.current.style.display = "none";
        }, 500);
    };

    useEffect(() => {
        console.log(openModal);
        if (openModal) {
            container.current.classList.replace("hidden", "flex");
        } else {
            container.current.classList.replace("flex", "hidden");
        }
    }, [openModal]);
    return (
        <div ref={container} className={`edit-modal absolute ease-in-out inset-0 z-10 flex items-center justify-center`}>
            <div className={`absolute inset-0 transition-all ${openModal ? "opacity-100 bg-background bg-opacity-50  backdrop-blur-md" : "opacity-0"}`}></div>
            <Card className={cn("relative z-10 w-full max-w-md bg-background transition-all ease-in-out", openModal ? "opacity-1000 scale-1000" : "opacity-0 scale-0")}>
                <CardHeader>
                    <CardTitle className="text-white">Edit nama</CardTitle>
                    <CardDescription className="text-white">Mau ganti nama apa?</CardDescription>
                </CardHeader>
                <form>
                    <CardContent className="flex flex-col gap-6">
                        <div className="group/field grid gap-2">
                            <Label htmlFor="name" className="group-data-[invalid=true]/field:text-destructive text-white">
                                Nama{" "}
                                <span aria-hidden="true" className="text-destructive">
                                    *
                                </span>
                            </Label>
                            <Input id="name" name="name" placeholder="Fathin" className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive border-accent text-white" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <p className="text-white">Preview nama kamu: {name}</p>
                    </CardContent>
                    <CardFooter className="gap-2">
                        <Button type="submit" className="text-white bg-accent" size="sm" disabled={!name || name.trim() === ""} onClick={handleName}>
                            Ganti
                        </Button>

                        <Button type="submit" className="bg-destructive text-white" size="sm" disabled={false} onClick={resetName}>
                            Batal
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
