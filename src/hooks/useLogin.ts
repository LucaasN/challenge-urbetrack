import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { showToast } from "../utils/toast";

export const useLogin = () => {
  const { userName, setUserName, reset } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidUserName = /^[a-z]+$/.test(userName);

  const isValidPassword = () => {
    const numbers = password.slice(0, 3);
    const passwordUserName = password.slice(3);
    const validUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
    return numbers === "123" && passwordUserName === validUserName;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userName || !password) {
      showToast("error", "Los campos nombre y contraseña son obligatorios");
      return;
    }

    if (!isValidUserName || !isValidPassword()) {
      showToast(
        "error",
        "Los campos no son válidos. Forma correcta: username: nombre - password: 123Nombre"
      );
      return;
    }

    showToast("success", "Login exitoso!");
    setTimeout(() => {
      navigate("/home"); // Redirige a la pagina de home/images
    }, 300);
  };

  const handleLogOut = () => {
    reset();
    navigate("/login"); // Redirige a la pagina de login
  };

  return {
    userName,
    setUserName,
    reset,
    showPassword,
    setShowPassword,
    password,
    setPassword,
    handleSubmit,
    handleLogOut,
  };
};
