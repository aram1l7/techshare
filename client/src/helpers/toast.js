import { toast } from "react-toastify";
const positionToasterContainer = () => {
  let topOffset = 12;
  const elem = document.querySelector('nav');
  if(elem) {
     topOffset += elem.clientHeight;
     const toasterContainer = document.getElementsByClassName('toaster')[0];
     if(toasterContainer) {
        toasterContainer.style.top = `${ topOffset }px`;
     }
  }
}
export default {
  remove(text, options = {}) {
    toast(text, {
      className: "toaster-item toaster-remove",
      closeButton: false,
      draggable: false,
      onOpen: positionToasterContainer,
      ...options,
    });
  },
  success(text, options = {}) {
    toast(text, {
      className: "toaster-item toaster-success",
      closeButton: false,
      draggable: false,
      onOpen: positionToasterContainer,
      ...options,
    });
  },
  error(text, options = {}) {
    toast(text, {
      className: "toaster-item toaster-error",
      closeButton: false,
      draggable: false,
      onOpen: positionToasterContainer,
      ...options,
    });
  },
  info(text, options = {}) {
    toast(text, {
      className: "toaster-item toaster-info",
      closeButton: false,
      draggable: false,
      onOpen: positionToasterContainer,
      ...options,
    });
  },
};
