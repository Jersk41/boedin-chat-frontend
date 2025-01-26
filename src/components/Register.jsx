import { useState, useEffect, useRef } from "react";
import useDataStore from "@/store/Store";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";


export default function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("");

    const nameStore = useDataStore((state) => state.name);
    const addNameStore = useDataStore((state) => state.setName);
    const localName = localStorage.getItem("name");

    const handleName = (e) => {
        e.preventDefault();
        if(!name || name.trim() ==='') return;
        if (name.length < 5 && name.length > 21) return; 
        localStorage.setItem("name", name.trim());
        addNameStore(name.trim());
    };

    useEffect(() => {
        if (localName) {
            addNameStore(localName);
        }
    }, [localName, addNameStore]);
    
    if(localName) {
        navigate('/',{replace:true});
    }

    return (
        <div className='user-modal absolute inset-0 flex items-center justify-center transition-all'>
            <div className='absolute inset-0 bg-background bg-opacity-50 backdrop-blur-md transition-all'></div>
            <Card className="relative z-10 w-full max-w-md bg-background transition-all">
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
                                className="peer border-white text-white"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                min={5}
                                max={21}
                                aria-errormessage="error-name"
                            />
                            {!(name.trim().length > 5 && name.trim().length <= 21) ? <p className="text-destructive invinsible peer-invalid:visible">Username harus memiliki panjang 6-21 karakter saja</p> : ""}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-success text-background" type="submit" size="sm" disabled={!name || name.trim() === ''} onClick={handleName}>
                            Chatting
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
