import { toast } from "react-toastify";
const successToastMessage = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
        className: "copy-toast-message",
        autoClose: 2000,
    });
}

export default successToastMessage;