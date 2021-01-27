import React, { useState } from "react";
import Modal from "./Modal";

function ModalButton(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function toggleModal() {
        console.log("clicked");
        setModalIsOpen(!modalIsOpen);
    }
    return (
        <div>
            <div onClick={toggleModal}>My Modal</div>
            <Modal modalIsOpen={modalIsOpen} toggle={toggleModal}></Modal>
        </div>
    );
}
export default ModalButton;
