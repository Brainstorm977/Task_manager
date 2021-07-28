import React from "react";
import styled from "styled-components";
import ToDo from "./ToDo";

const TaskList = ({ tasks, deleteHandler }) => {
	return (
		<StyledTaskList>
			<List>
				{tasks.map((task) => (
					<ToDo
						task={task}
						deleteHandler={deleteHandler}
						key={task.id}
					>
						{task}
					</ToDo>
				))}
			</List>
		</StyledTaskList>
	);
};

const StyledTaskList = styled.div`
	width: 80%;
	margin: 50px 30px;
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export default TaskList;
