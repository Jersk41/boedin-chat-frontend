import { createContext, useContext, useEffect, useState } from "react";
import useDataStore from "@/store/Store";
import { Navigate, Outlet, useNavigate } from "react-router";
import { isExpired, decodeToken } from "react-jwt";

export const AuthContext = createContext(undefined);

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	// const [name, setName] = useState("");

	// const nameStore = useDataStore((state) => state.name);
	const addNameStore = useDataStore((state) => state.setName);
	// const tokenStore = useDataStore((state) => state.token);
	// const addTokenStore = useDataStore((state) => state.setToken);
	const localName = localStorage.getItem("name");

	useEffect(() => {
		if (localName) {
			addNameStore(localName);
		}
	}, [localName, addNameStore]);

	const value = {
		currentUser: currentUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!isLoading && children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("Contextnya ilang coy!");
	}
	return context;
};

export function AuthLayout() {
	const navigate = useNavigate();
	const localName = localStorage.getItem("name");
	const localIdentifier = localStorage.getItem("identifier");
	const decodedToken = decodeToken(localIdentifier);
	const isMyTokenExpired = isExpired(localIdentifier);

	if (!isMyTokenExpired) {
		navigate("/login", { replace: true });
	}
	return localName || localIdentifier ? (
		<Outlet />
	) : (
		<Navigate to="/login" replace />
	);
}
