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
		background-color: rgba(255,255,255,.5);
		z-index: 1;
	}
	.modal {
		display: block;
		position: relative;
		width: 500px;
		height: 400px;
		background-color: white;
		z-index: 2;
        box-shadow: 0 0 5rem 1rem rgba(0,0,0,.3);
		color: red;
		.close-button {
			display: block;
			position: absolute;
            top: .5rem;
            right: .5rem;
            border-radius: .2rem;
			height: 1.5rem;
			width: 1.5rem;
			background-color: grey;
			color: white;
			size: 1rem;
			z-index: 3;
			cursor: pointer;
            padding-left: .4rem;
		}
	}
    }
`;

export default ModalStyled