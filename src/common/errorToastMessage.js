import { toast } from "react-toastify";
const errorToastMessage = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      className: "copy-toast-message",
      autoClose: 2000,
    });
  }

  export default errorToastMessage;