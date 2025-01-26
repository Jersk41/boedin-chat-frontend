import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import {AuthLayout} from "./components/AuthLayout";
import Register from "./components/Register";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/" element={<App />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	</BrowserRouter>
);
