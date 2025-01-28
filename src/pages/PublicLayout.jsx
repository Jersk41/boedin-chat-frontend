import { Navigate, Outlet } from "react-router";
import useDataStore from "@/store/Store";
import { useEffect, useState } from "react";

export function PublicLayout() {
	const [isLoading, setIsLoading] = useState(true);
	const isAuthenticated = useDataStore((state) => state.isAuthenticated);
	const syncUser = useDataStore((state) => state.syncUser);
	const user = useDataStore((state) => state.user);

	useEffect(() => {
		const initAuth = async () => {
			try {
				await syncUser();
			} catch (error) {
				console.error("Authentication error:", error);
			} finally {
				setIsLoading(false);
			}
		};

		initAuth();
	}, [syncUser]);

	if (isLoading) {
		return null; // or loading spinner
	}

	const hasLocalAuth = localStorage.getItem("identifier");

	if (isAuthenticated || hasLocalAuth || user) {
		return <Outlet />;
	}

	return <Navigate to="/login" replace />;
}
