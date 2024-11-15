const AuthLayout = (props) => {
    const { children } = props;
    return (
        <div className="flex flex-col items-center justify-center h-screen pt-5">
            <div className="border border-gray-300 px-10 pt-2 pb-4">
                <div className="bg-full text-center px-14 py-5 mb-4">
                    <img
                        src="./igText.png"
                        alt="logoText"
                        className="w-40 h-16 object-cover object-[position:50%_30%]"
                    />
                </div>
                {children}
                <div className="flex w-full justify-center items-center gap-5 mt-5 mb-6 text-xs font-medium">
                    <div className="w-2/4 h-[0.2px] border"></div>
                    <p className="text-gray-500">ATAU</p>
                    <div className="w-2/4 h-[0.2px] border"></div>
                </div>
                <div className="px-3 pt-2 pb-3 text-center text-blue-900 flex justify-center items-center">
                    <a href="" className="font-semibold text-sm">
                        <i className="me-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="23"
                                height="23"
                                className="inline-block"
                                style={{ fill: "currentColor" }}
                            >
                                <g>
                                    <path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
                                </g>
                            </svg>
                        </i>
                        Masuk dengan Facebook
                    </a>
                </div>
                <div className="text-center">
                    <a href="" className="text-sm text-blue-900">
                        Lupa kata sandi?
                    </a>
                </div>
            </div>
            <div className="border border-gray-300 px-20 py-5 mt-3">
                <p className="text-sm px-1">
                    Tidak punya akun?{" "}
                    <a href="" className="text-sky-500 font-semibold">
                        Buat akun
                    </a>
                </p>
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
            <div className="flex flex-col items-center text-xs mt-32 text-gray-500">
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

export default AuthLayout;
