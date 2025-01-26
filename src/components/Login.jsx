import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import { isExpired, decodeToken } from "react-jwt";
import useDataStore from "@/store/Store";

export default function Login() {
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const tokenStore = useDataStore((state) => state.token);
	const addTokenStore = useDataStore((state) => state.setToken);
	const addNameStore = useDataStore((state) => state.setName);
	const localName = localStorage.getItem("name");

	useEffect(() => {
		if (localName) {
			setName(localName);
		}
	}, [localName]);

	if (name) return navigate("/", { replace: true });

	if (searchParams.has("token")) {
		console.log(searchParams.get("token"));
		let token = searchParams.get("token");
		const decodedToken = decodeToken(token);
		const isMyTokenExpired = isExpired(token);

		if (!isMyTokenExpired) {
			navigate("/login", { replace: true });
		}
		addTokenStore(token);
		addNameStore(decodedToken.username.trim());

		localStorage.setItem("name", decodedToken.username.trim());
		localStorage.setItem("identifier", token);
	}
	return (
		<div className="w-screen h-screen flex items-center justify-center transition-all">
			<Card className="w-full max-w-md bg-background transition-all">
				<CardHeader>
					<CardTitle className="text-white">
						Selamat datang di Boedin chat!
					</CardTitle>
					<CardDescription className="text-white">
						Login dulu yuk!
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-6">
					<NavLink
						to="https://2dcrrlhs-8080.asse.devtunnels.ms/api/auth/login"
						className="bg-accent text-white px-1.5 py-3 text-center"
					>
						Login dengan discord
					</NavLink>
					<NavLink
						to="/register"
						className="bg-primary outline-white text-white px-1.5 py-3 text-center"
					>
						Coba Dulu
					</NavLink>
				</CardContent>
			</Card>
		</div>
	);
}
