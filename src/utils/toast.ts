import { toast, Slide } from "react-toastify";

type ToastType = "success" | "error";

export const showToast = (type:ToastType, message:string) => {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
};