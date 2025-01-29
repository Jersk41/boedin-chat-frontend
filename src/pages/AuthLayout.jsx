import { useEffect, useState } from "react";
import useDataStore from "@/store/Store";
import { Navigate, Outlet } from "react-router";

// export const AuthContext = createContext(undefined);

// export function AuthProvider({ children }) {
// 	const [currentUser, setCurrentUser] = useState(null);
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		// Handle anonymous user
// 		if (localName) {
// 			addNameStore(localName);
// 		}
// 	}, []);

// 	const value = {
// 		currentUser: currentUser,
// 	};

// 	return (
// 		<AuthContext.Provider value={value}>
// 			{!isLoading && children}
// 		</AuthContext.Provider>
// 	);
// }

// export const useAuth = () => {
// 	const context = useContext(AuthContext);
// 	if (!context) {
// 		throw new Error("Contextnya ilang coy!");
// 	}
// 	return context;
// };

export function AuthLayout() {
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
    
    if (!isAuthenticated || !hasLocalAuth || !user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
