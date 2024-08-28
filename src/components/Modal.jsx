import PropTypes from "prop-types";
import style from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={style.backdrop} onClick={onClose}></div>
      <dialog open={true} className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
