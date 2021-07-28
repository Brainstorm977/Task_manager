import React from "react";
import db from "../firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const style = {
	fontFamily: "'Poppins', sans-serif",
};

const ToDo = ({ task, deleteHandler }) => {
	const handleToggle = (event) => {
		db.collection("todos").doc(event.id).update({
			checked: !event.checked,
		});
	};

	return (
		<ListItem
			style={style}
			role={undefined}
			dense
			button
			onClick={() => handleToggle(task)}
		>
			<ListItemIcon>
				<Checkbox edge="start" checked={task.checked} disableRipple />
			</ListItemIcon>
			<ListItemText id={task.id} primary={task.todo} />
			<ListItemSecondaryAction>
				<IconButton
					edge="end"
					aria-label="comments"
					onClick={() => deleteHandler(task)}
				>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ToDo;
