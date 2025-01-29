// import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useSearchParams } from "react-router";
import useDataStore from "@/store/Store";
import { isExpired } from "react-jwt";

export default function Authorized() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	// const [countdown, setCountdown] = useState(5);

	const setToken = useDataStore((state) => state.setToken);

	if (searchParams.has("token")) {
		let token = searchParams.get("token");
		// const decodedData = decodeToken(token);
		const isMyTokenExpired = isExpired(token);

		if (!isMyTokenExpired) {
			navigate("/login", { replace: true });
		}
		setToken(token);
	}

	// useEffect(() => {
	//     setInterval(setCountdown(prev => prev - 1), countdown * 1000);
	// }, [countdown])

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background">
			<Card className="w-full max-w-md bg-background border-white shadow shadow-white">
				<CardHeader>
					<CardTitle className="text-white text-center">Autentikasi Berhasil</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-white">Sekarang anda dapat menutup tab ini</p>
					{/* <p>Redirect dalam waktu {countdown} detik</p> */}
				</CardContent>
			</Card>
		</div>
	);
}
