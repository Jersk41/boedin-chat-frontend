import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthLayout } from "@/pages/AuthLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Logout from "@/pages/Logout";
import Authorized from "@/pages/Authorized";
import { PublicLayout } from "./pages/PublicLayout";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/" element={<App />} />
					<Route path="/logout" element={<Logout />} />
				</Route>
				<Route element={<PublicLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/authorized" element={<Authorized />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
