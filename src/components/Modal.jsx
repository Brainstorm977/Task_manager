import React from "react";
import styled from "styled-components";

const Modal = ({ deleteConfirmHandler, rejectDeleteTask }) => {
	return (
		<StyledModal>
			<ModalDialog>
				<h3>Delete task?</h3>
				<button className="cancel" onClick={rejectDeleteTask}>
					Cancel
				</button>
				<button className="delete" onClick={deleteConfirmHandler}>
					Delete
				</button>
			</ModalDialog>
		</StyledModal>
	);
};

const StyledModal = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;
`;

const ModalDialog = styled.div`
	width: 250px;
	height: 150px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #dddddd;
	border-radius: 10px;
	z-index: 10;
	text-align: center;
	padding-top: 20px;
	h3 {
		margin-bottom: 20px;
	}
	button {
		color: white;
		width: 90px;
		height: 40px;
		border-radius: 5px;
		margin: 10px;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		&:hover {
			transform: scale(1.05);
		}
	}
	.delete {
		background-color: #2e4159;
	}
	.cancel {
		background-color: #f2441d;
	}
`;

export default Modal;
