import { useEffect, useRef, useState } from "react";
import useDataStore from "@/store/Store";
import { useNavigate } from "react-router";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Logout() {
	const logoutFn = useDataStore((state) => state.logout);
	const navigate = useNavigate();

	const [delay, setDelay] = useState(5);
	const interval = useRef();

	useEffect(() => {
		interval.current = setInterval(() => {
			setDelay((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval.current);
	}, []);

	useEffect(() => {
		if (delay === 0) {
			clearInterval(interval.current);
			if(logoutFn()) navigate("/login", { replace: true });
		}
	}, [delay, logoutFn, navigate]);

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background">
			<Card className="w-full max-w-md bg-background border-white shadow shadow-white text-white">
				<CardHeader>
					<CardTitle className="text-white text-center">
						Anda Sedang Logout
					</CardTitle>
					<CardDescription className="text-white text-opacity-50">
						Proses selesai dalam {delay}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-success">
						Oh iya, kapan-kapan kita lanjut ngobrol lagi nanti ya
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
