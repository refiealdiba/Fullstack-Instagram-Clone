import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout type="register">
            <FormLogin action="/" />
        </AuthLayout>
    );
};

export default RegisterPage;
