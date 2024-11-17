import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout type="register">
            <FormRegister action="/" />
        </AuthLayout>
    );
};

export default RegisterPage;
