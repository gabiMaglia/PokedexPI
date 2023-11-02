import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useErrorAlert = (message, statusCode) => {
  const MySwal = withReactContent(Swal);
  let timerInterval;

 const paseMessage = JSON.parse(message).message 

  MySwal.fire({
    title: statusCode,
    html:  paseMessage,
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  })
};

export default useErrorAlert;
