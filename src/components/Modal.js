import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    function closeClose() {
        props.closeClose();
    }
    const MyModal = (
        <div id="modal" className={props.modalIsOpen ? "show" : "hide"}>
            <div className="backdrop" onClick={props.closeBackdrop}></div>
            <div className="modal">
                {props.children}
                <div
                    role="button"
                    className="close-button"
                    onClick={closeClose}
                >
                    Close Modal
                </div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(
        MyModal,
        document.querySelector("#modal-root")
    );
};
export default Modal;
