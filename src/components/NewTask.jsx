import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import React from "react";
import TextField from "@material-ui/core/TextField";

const NewTask = ({ onSubmit, input, onChange }) => {
	return (
		<form noValidate autoComplete="off" onSubmit={onSubmit}>
			<TextField
				id="standard-basic"
				label="Add a new task"
				value={input}
				onChange={onChange}
			/>
			<AddButton
				disabled={!input}
				type="submit"
				variant="contained"
				color="primary"
			>
				Add
			</AddButton>
		</form>
	);
};

const AddButton = styled(Button)({
	height: 48,
	width: 80,
	marginLeft: 10,
});

export default NewTask;
