import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const MyModal = (
        <div id="modal" className={props.modalIsOpen ? "show" : "hide"}>
            <div className="backdrop" onClick={props.toggle}></div>
                <div className="modal">
                    The Modal is open: {props.modalIsOpen}
                    <div
                        role="button"
                        className="close-button"
                        onClick={props.toggle}
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
