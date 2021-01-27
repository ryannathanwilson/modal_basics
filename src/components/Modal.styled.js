import styled from "styled-components"

const ModalStyled = styled.div`
   
    display: ${props => props.modalIsOpen ? "flex" : "none"};
    position: fixed;
	background-color: transparent;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	justify-content: center;
	align-items: center;
	.backdrop {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 1;
	}
	.modal {
		display: block;
		position: relative;
		width: 500px;
		height: 400px;
		background-color: blue;
		z-index: 2;
		.close-button {
			display: block;
			position: relative;
			height: 50px;
			width: 100px;
			background-color: grey;
			color: white;
			size: 2rem;
			z-index: 3;
			cursor: pointer;
		}
	}
    }
`;

export default ModalStyled