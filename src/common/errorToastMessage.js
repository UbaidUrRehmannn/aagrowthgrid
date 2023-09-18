import { toast } from "react-toastify";
export default errorToastMessage = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      className: "copy-toast-message",
      autoClose: 2000,
    });
  }