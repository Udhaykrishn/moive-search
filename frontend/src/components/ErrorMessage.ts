import toast from "react-hot-toast";
import axios from "axios";

export const ErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      toast.error("Error Fetching movie:", error.response.data.error);
    } else if (error.request) {
      toast.error("No response recevied from the server");
    }
  } else {
    console.error("unexpected Error: ", error);
  }
};
