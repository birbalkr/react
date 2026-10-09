import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
    let dispatch = useDispatch();
    const [registerUsers, setRegisterUsers] = useState(JSON.parse(localStorage.getItem("registerUsers")) || []);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const registerFrom = (data) => {
        let arr = [...registerUsers, data];
        setRegisterUsers(arr);
        localStorage.setItem("registerUsers", JSON.stringify(arr));
        console.log(data);

    };
    const loginForm = (data) => {
        let user = registerUsers.find((user) => user.email === data.email && user.password === data.password);

        if (!user) {
            alert("Invalid email or password");
            return;
        }
        dispatch(addUser(user));
        localStorage.setItem("user", JSON.stringify(user));
        reset();
        alert("Login successful");

        console.log(data);
    };


    return {
        register,
        handleSubmit,
        errors,
        registerFrom,
        loginForm,
    }
}