import React, { useState } from "react";
import Modal from "./Modal";
import ModalButtonStyled from "./ModalButton.styled"

function ModalButton(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal() {
        console.log("opened with modal button");
        setModalIsOpen(true);
    }
    function closeClose() {
        console.log("close with close button");
        setModalIsOpen(false);
    }
    function closeBackdrop() {
        console.log("close with backdrop");
        setModalIsOpen(false);
    }
    return (
        <div>
            <ModalButtonStyled onClick={openModal}>My Modal</ModalButtonStyled>
            <Modal
                modalIsOpen={modalIsOpen}
                closeClose={closeClose}
                closeBackdrop={closeBackdrop}
            >
				Stuff in the Modal
			</Modal>
        </div>
    );
}
export default ModalButton;
