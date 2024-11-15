import RowInput from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (action) => {
    return (
        <form action={action}>
            <RowInput type="text" id="username" text="Nomor Telepon, nama pengguna, atau email" />
            <RowInput type="password" id="password" text="Kata sandi" />
            <Button
                type="submit"
                style="bg-sky-400 text-white w-full py-1.5 font-semibold text-sm rounded-md"
                text="Masuk"
            />
        </form>
    );
};

export default FormLogin;
