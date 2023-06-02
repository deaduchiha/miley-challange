import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UseToastify = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      break;
  }
};

export default UseToastify;
