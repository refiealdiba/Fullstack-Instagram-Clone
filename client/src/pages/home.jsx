import { useEffect, useState } from "react";
import { getUserData } from "../services/auth.service";

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const userData = getUserData(token); // Mendekode token
                setUser(userData);
            } catch (err) {
                console.error("Invalid token:", err);
                setUser(null); // Reset user jika token tidak valid
            }
        }
    }, []); // Dependency array kosong

    return (
        <div>
            {user ? (
                <p>
                    Home, {user.username}, id: {user.id}
                </p> // Pastikan username ada di payload
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
