import { useState } from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) || []);
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const registerForm = (data) => {
        let arr = [...registerUser, data]
        setRegisterUser(arr);
        localStorage.setItem("registerUser", JSON.stringify(arr));
        console.log(data);

    }

    const loginForm = (data) => {
        let user = registerUser.find((user) => user.email === data.email && user.password === data.password)
        if (!user) {
            alert("Invalid email or password");
            reset();
            return;
        }
        dispatch(addUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        reset();
        console.log(data);
        navigate("/main");


    }

    return {
        register,
        registerForm,
        registerUser,
        loginForm,
        handleSubmit,
        errors,

    }
}