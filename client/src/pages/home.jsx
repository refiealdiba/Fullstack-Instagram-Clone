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
        <div className="flex border min-h-screen bg-black text-white">
            <div className="w-2/12 fixed h-full">
                <aside className="flex flex-col justify-between border h-full py-10 px-5">
                    <div className="flex flex-col">
                        <div className="mb-5">
                            <svg
                                aria-label="Instagram"
                                className="w-8 h-8"
                                fill="currentColor"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Instagram</title>
                                <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800"
                            >
                                <svg
                                    aria-label="Beranda"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Beranda</title>
                                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
                                </svg>
                                <span className="font-semibold">Beranda</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Cari"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Cari</title>
                                    <path
                                        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="16.511"
                                        x2="22"
                                        y1="16.511"
                                        y2="22"
                                    ></line>
                                </svg>
                                <span className="font-semibold">Cari</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Jelajahi"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Jelajahi</title>
                                    <path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z"></path>
                                </svg>
                                <span className="font-semibold">Jelajahi</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Reels"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Reels</title>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="2.049"
                                        x2="21.95"
                                        y1="7.002"
                                        y2="7.002"
                                    ></line>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="13.504"
                                        x2="16.362"
                                        y1="2.001"
                                        y2="7.002"
                                    ></line>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="7.207"
                                        x2="10.002"
                                        y1="2.11"
                                        y2="7.002"
                                    ></line>
                                    <path
                                        d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                    <path
                                        d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="font-semibold">Reels</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Messenger"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Messenger</title>
                                    <path
                                        d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                        strokeWidth="1.739"
                                    ></path>
                                    <path
                                        d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="font-semibold">Pesan</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Notifikasi"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Notifikasi</title>
                                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                </svg>
                                <span className="font-semibold">Notifikasi</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Postingan baru"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Postingan baru</title>
                                    <path
                                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="6.545"
                                        x2="17.455"
                                        y1="12.001"
                                        y2="12.001"
                                    ></line>
                                    <line
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        x1="12.003"
                                        x2="12.003"
                                        y1="6.545"
                                        y2="17.455"
                                    ></line>
                                </svg>
                                <span className="font-semibold">Buat</span>
                            </a>
                            <a
                                href=""
                                className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                            >
                                <svg
                                    aria-label="Beranda"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    height="24"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <title>Beranda</title>
                                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
                                </svg>
                                <span className="font-semibold">Profil</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <a
                            href=""
                            className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                        >
                            <svg
                                aria-label=""
                                className="w-6 h-6"
                                fill="currentColor"
                                height="24"
                                role="img"
                                viewBox="0 0 192 192"
                                width="24"
                            >
                                <title></title>
                                <path
                                    className="w-6 h-6"
                                    d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                                ></path>
                            </svg>
                            <span className="font-semibold">Threads</span>
                        </a>
                        <a
                            href=""
                            className="px-3 py-4 rounded-xl flex gap-3 items-center hover:bg-zinc-800 transition-all ease-in-out duration-200"
                        >
                            <svg
                                aria-label="Pengaturan"
                                className="w-8 h-8"
                                fill="currentColor"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Pengaturan</title>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="4"
                                    y2="4"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="12"
                                    y2="12"
                                ></line>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="3"
                                    x2="21"
                                    y1="20"
                                    y2="20"
                                ></line>
                            </svg>
                            <span className="font-semibold">Lainnya</span>
                        </a>
                    </div>
                </aside>
            </div>
            <main className="flex justify-center w-full gap-10">
                {/* content */}
                <div className="border py-5 max-w-2xl w-full">
                    {/* stories */}
                    <div className="flex gap-5 justify-center text-sm">
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                        <a href="" className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <p className="pt-1">ayam</p>
                        </a>
                    </div>
                    {/* posts */}
                    <div className="mt-5 w-4/6 mx-auto border-b border-zinc-800 pb-4">
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-full bg-white"></div>
                                <div className="flex flex-col">
                                    <a href="" className="font-semibold text-sm">
                                        ayam{" "}
                                        <span className="font-normal text-zinc-400">• 1 jam</span>
                                    </a>
                                    <a href="" className="text-xs">
                                        {" "}
                                        Las Vegas, USA
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <svg
                                        aria-label="Opsi lainnya"
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Opsi lainnya</title>
                                        <circle cx="12" cy="12" r="1.5"></circle>
                                        <circle cx="6" cy="12" r="1.5"></circle>
                                        <circle cx="18" cy="12" r="1.5"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-zinc-300 h-[500px] mt-2 rounded-sm"></div>
                        <div>
                            {/* buttons */}
                            <div className="flex py-2 gap-5">
                                <button>
                                    <svg
                                        aria-label="Suka"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Suka</title>
                                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        aria-label="Komentari"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Komentari</title>
                                        <path
                                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        aria-label="Bagikan"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Bagikan</title>
                                        <line
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            x1="22"
                                            x2="9.218"
                                            y1="3"
                                            y2="10.083"
                                        ></line>
                                        <polygon
                                            fill="none"
                                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        ></polygon>
                                    </svg>
                                </button>
                            </div>
                            <button className="text-sm font-semibold pb-2">981 suka</button>
                            <div>
                                <span className="text-sm">
                                    <a href="" className="text-sm font-semibold">
                                        Ayam
                                    </a>{" "}
                                    Menurut kalian gimana vibes nya udah Ghibli banget gak?
                                </span>
                            </div>
                            <div>
                                <button className="text-sm text-zinc-400">
                                    Lihat semua 17 komentar
                                </button>
                            </div>
                            <div className="text-sm flex">
                                <input
                                    type="text"
                                    className="w-full border-0 focus:outline-none text-white bg-black"
                                    placeholder="Tambahkan komentar..."
                                />
                                <button className="text-blue-500">Kirim</button>
                            </div>
                        </div>
                    </div>
                    {/* posts */}
                    <div className="mt-5 w-4/6 mx-auto border-b border-zinc-800 pb-4">
                        <div className="flex justify-between">
                            <div className="flex gap-3">
                                <div className="w-9 h-9 rounded-full bg-white"></div>
                                <div className="flex flex-col">
                                    <a href="" className="font-semibold text-sm">
                                        ayam{" "}
                                        <span className="font-normal text-zinc-400">• 1 jam</span>
                                    </a>
                                    <a href="" className="text-xs">
                                        {" "}
                                        Las Vegas, USA
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button>
                                    <svg
                                        aria-label="Opsi lainnya"
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Opsi lainnya</title>
                                        <circle cx="12" cy="12" r="1.5"></circle>
                                        <circle cx="6" cy="12" r="1.5"></circle>
                                        <circle cx="18" cy="12" r="1.5"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-zinc-300 h-[500px] mt-2 rounded-sm"></div>
                        <div>
                            {/* buttons */}
                            <div className="flex py-2 gap-5">
                                <button>
                                    <svg
                                        aria-label="Suka"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Suka</title>
                                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        aria-label="Komentari"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Komentari</title>
                                        <path
                                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                </button>
                                <button>
                                    <svg
                                        aria-label="Bagikan"
                                        className="w-7 h-7"
                                        fill="currentColor"
                                        height="24"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="24"
                                    >
                                        <title>Bagikan</title>
                                        <line
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            x1="22"
                                            x2="9.218"
                                            y1="3"
                                            y2="10.083"
                                        ></line>
                                        <polygon
                                            fill="none"
                                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                            stroke="currentColor"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        ></polygon>
                                    </svg>
                                </button>
                            </div>
                            <button className="text-sm font-semibold pb-2">981 suka</button>
                            <div>
                                <span className="text-sm">
                                    <a href="" className="text-sm font-semibold">
                                        Ayam
                                    </a>{" "}
                                    Menurut kalian gimana vibes nya udah Ghibli banget gak?
                                </span>
                            </div>
                            <div>
                                <button className="text-sm text-zinc-400">
                                    Lihat semua 17 komentar
                                </button>
                            </div>
                            <div className="text-sm flex">
                                <input
                                    type="text"
                                    className="w-full border-0 focus:outline-none text-white bg-black"
                                    placeholder="Tambahkan komentar..."
                                />
                                <button className="text-blue-500">Kirim</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border">profile and recommendation</div>
            </main>
        </div>
    );
};

export default Home;
