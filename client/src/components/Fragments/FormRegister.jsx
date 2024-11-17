import RowInput from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
    const { action } = props;
    return (
        <>
            <div className="px-3 flex justify-center">
                <p className="w-[250px] text-center text-base font-semibold text-gray-500">
                    Buat akun untuk melihat foto dan video dari teman Anda.
                </p>
            </div>
            <div className="px-1 pt-2 pb-3 text-center text-blue-900 flex justify-center items-center">
                <a
                    href=""
                    className=" bg-blue-500 text-white w-full py-1.5 font-semibold text-sm rounded-md mt-2"
                >
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
            <div className="flex w-full justify-center items-center gap-5 mt-5 mb-6 text-xs font-medium">
                <div className="w-2/4 h-[0.2px] border"></div>
                <p className="text-gray-500">ATAU</p>
                <div className="w-2/4 h-[0.2px] border"></div>
            </div>
            <form action={action}>
                <RowInput type="text" id="username" text="Nomor Ponsel atau email" />
                <RowInput type="password" id="password" text="Kata sandi" />
                <RowInput type="text" id="namaLengkap" text="Nama Lengkap" />
                <RowInput type="text" id="username" text="Nama Pengguna" />
                <div className="w-[260px] mx-auto py-3 text-center text-xs font-base flex flex-col justify-center items-center gap-5">
                    <p className="text-gray-500">
                        Orang yang menggunakan layanan kami mungkin telah mengunggah informasi
                        kontak Anda ke Instagram.{" "}
                        <a href="" className="text-blue-900">
                            Pelajari Selengkapnya
                        </a>
                    </p>
                    <p className="text-gray-500">
                        Dengan mendaftar, berarti Anda menyetujui{" "}
                        <a href="" className="text-blue-900">
                            Ketentuan, Kebijakan Privasi,
                        </a>{" "}
                        dan{" "}
                        <a href="" className="text-blue-900">
                            Kebijakan Cookie kami.
                        </a>
                    </p>
                </div>
                <Button
                    type="submit"
                    style="bg-blue-500 text-white w-full py-1.5 font-semibold text-sm rounded-md mt-2"
                    text="Masuk"
                />
            </form>
        </>
    );
};

export default FormRegister;
