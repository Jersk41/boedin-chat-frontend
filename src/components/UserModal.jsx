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

export default function UserModal() {
    const container = useRef(null);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");

    const nameStore = useDataStore((state) => state.name);
    const addNameStore = useDataStore((state) => state.setName);
    const localName = localStorage.getItem("name");

    const handleName = (e) => {
        e.preventDefault();
        if(!name || name.trim() ==='') return;
        localStorage.setItem("name", name.trim());
        addNameStore(name.trim());
        setOpen(false);
    };

    useEffect(() => {
        if (localName) {
            addNameStore(localName);
        } else {
            setOpen(true);
        }
    }, [localName, addNameStore]);

    return (
        <div ref={container} className={`user-modal absolute inset-0 flex items-center justify-center transition-all ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute inset-0 bg-background bg-opacity-50 backdrop-blur-md transition-all ${open ? 'opacity-100' : 'opacity-0'}`}></div>
            <Card className={cn("relative z-10 w-full max-w-md bg-background transition-all", open ? 'opacity-100 scale-100' : 'opacity-0 scale-0')}>
                <CardHeader>
                    <CardTitle className="text-white">Selamat datang di Boedin chat!</CardTitle>
                    <CardDescription className="text-white">Boleh tau nama Anda siapa?</CardDescription>
                </CardHeader>
                <form>
                    <CardContent className="flex flex-col gap-6">
                        <div className="group/field grid gap-2">
                            <Label htmlFor="name" className="text-white">
                                Nama{" "}
                                <span aria-hidden="true" className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Fathin"
                                className="border-white text-white"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                aria-errormessage="error-name"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" size="sm" disabled={!name || name.trim() === ''} onClick={handleName}>
                            Submit sekarang!
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
