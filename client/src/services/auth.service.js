import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://localhost:5000/auth/login";

export const login = (data, callback) => {
    axios
        .post(API_URL, data)
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            callback(false, err);
        });
};

export const getUserData = (token) => {
    const decoded = jwtDecode(token);
    return decoded;
};
