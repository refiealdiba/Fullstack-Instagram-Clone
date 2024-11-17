import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, type } = props;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-5">
            <div className="border border-gray-300 px-10 pt-2 pb-4">
                <div className="bg-full text-center px-14 py-5 mb-4">
                    <img
                        src="./igText.png"
                        alt="logoText"
                        className="w-40 h-16 object-cover object-[50%_30%]"
                    />
                </div>
                {children}
            </div>
            <div className="border border-gray-300 px-20 py-5 mt-3">
                <Navigation type={type} />
            </div>
            <div className="my-4 text-sm">
                <p className="text-center mb-5">Dapatkan Aplikasi</p>
                <div className="flex h-10">
                    <a href="">
                        <img
                            src="/getGooglePlay.png"
                            alt="playstore"
                            className="w-32 h-full object-contain"
                        />
                    </a>
                    <a href="">
                        <img
                            src="/getMicrosoft.png"
                            alt="microsoft"
                            className="w-32 h-full object-contain"
                        />
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center text-xs mt-28 text-gray-500">
                <ul className="flex justify-center gap-4 mt-3">
                    <li>
                        <a href="">Meta</a>
                    </li>
                    <li>
                        <a href="">Tentang</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Pekerjaan</a>
                    </li>
                    <li>
                        <a href="">Bantuan</a>
                    </li>
                    <li>
                        <a href="">API</a>
                    </li>
                    <li>
                        <a href="">Privasi</a>
                    </li>
                    <li>
                        <a href="">Ketentuan</a>
                    </li>
                    <li>
                        <a href="">Lokasi</a>
                    </li>
                    <li>
                        <a href="">Instagram Lite</a>
                    </li>
                    <li>
                        <a href="">Threads</a>
                    </li>
                    <li>
                        <a href="">Pengungguhan Kontak & Nonpengguna</a>
                    </li>
                    <li>
                        <a href="">Verifikasi Meta</a>
                    </li>
                    <li>
                        <a href="">Meta di Indonesia</a>
                    </li>
                </ul>
                <div className="flex gap-5 mt-5">
                    <p>Bahasa Indonesia</p>
                    <p>&copy; 2023 Instagram from Meta</p>
                </div>
            </div>
        </div>
    );
};

const Navigation = (props) => {
    const { type } = props;

    if (type === "login") {
        return (
            <p className="text-sm px-1">
                Tidak punya akun?{" "}
                <Link to="/register" className="text-sky-500 font-semibold">
                    Buat akun
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm px-8">
                Punya akun?{" "}
                <Link to="/login" className="text-sky-500 font-semibold">
                    Masuk
                </Link>
            </p>
        );
    }
};

export default AuthLayout;
