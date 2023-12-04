import Swal from 'sweetalert2';

export const Alert = (options) => {
  const defaultOptions = {
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: true,
    width: 350,
  };

  return Swal.fire({ ...defaultOptions, ...options });
};