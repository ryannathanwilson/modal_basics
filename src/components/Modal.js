import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ModalStyled from "./Modal.styled"

const Modal = (props) => {
    function closeClose(e) {
        if (e.key === "Escape") {
            props.closeClose();
            window.removeEventListener('keydown',closeClose);
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', closeClose);
    });
    const MyModal = (
        <ModalStyled modalIsOpen={props.modalIsOpen}>
            <div className="backdrop" onClick={props.closeBackdrop}></div>
            <div className="modal">
                {props.children}
                <div
                    role="button"
                    className="close-button"
                    onClick={closeClose}
                >
                    X
                </div>
            </div>
        </ModalStyled>
    );
    return ReactDOM.createPortal(
        MyModal,
        document.querySelector("#modal-root")
    );
};
export default Modal;
