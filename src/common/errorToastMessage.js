import { toast } from "react-toastify";
export default errorToastMessage = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      className: "copy-toast-message",
      autoClose: 2000,
    });
  }