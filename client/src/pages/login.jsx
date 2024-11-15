import { useState } from "react";

const LoginPage = () => {
    const [user, setUser] = useState(""); // Menggunakan string kosong untuk nilai input

    // Fungsi untuk menangani perubahan nilai input dan animasi label
    const handleInputAnimation = (e) => {
        setUser(e.target.value); // Set nilai user saat input berubah
    };

    // Perubahan posisi label berdasarkan state user
    const labelPositionClass = user ? "top-1 text-[11px]" : "top-3 text-xs";
    const inputPositionClass = user ? "pt-5 pb-1" : "pt-3 pb-3";

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form action="">
                <div className="border px-10">
                    <div className="bg-full text-center p-14">
                        <h1 className="text-4xl">Instagram</h1>
                    </div>
                    <div
                        className={`relative flex flex-col text-xs border px-3 ${inputPositionClass}`}
                    >
                        {/* Label */}
                        <label
                            className={`absolute text-gray-600 transition-all duration-200 ease-in-out ${labelPositionClass}`}
                            htmlFor="username"
                        >
                            Nomor telepon, nama pengguna, atau email
                        </label>
                        {/* Input */}
                        <input
                            className="outline-none focus:border-gray-700 border-gray-300"
                            type="text"
                            id="username"
                            value={user}
                            onChange={handleInputAnimation}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Kata Sandi</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Masuk</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
