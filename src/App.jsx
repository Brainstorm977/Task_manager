import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import db from "./firebase";

function App() {
	const [currentTask, setCurrentTask] = useState(null);
	const [newTask, setNewTask] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [deleteTask, setDeleteTask] = useState(false);

	useEffect(() => {
		db.collection("todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setTaskList(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						todo: doc.data().todo,
						checked: doc.data().checked,
					}))
				);
			});
	}, []);

	const submitHandler = (event) => {
		event.preventDefault();
		db.collection("todos").add({
			todo: newTask,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			checked: false,
		});
		setNewTask("");
	};

	const changeHandler = (event) => {
		setNewTask(event.target.value);
	};

	const deleteHandler = (event) => {
		setDeleteTask(true);
		setCurrentTask(event);
	};

	const deleteConfirmHandler = () => {
		db.collection("todos").doc(currentTask.id).delete();
		setDeleteTask(false);
	};

	const rejectDeleteTask = () => {
		setDeleteTask(false);
	};

	return (
		<div className="App">
			{deleteTask && (
				<Modal
					deleteConfirmHandler={deleteConfirmHandler}
					rejectDeleteTask={rejectDeleteTask}
				/>
			)}
			<Header />
			<NewTask
				onSubmit={submitHandler}
				input={newTask}
				onChange={changeHandler}
			/>
			<TaskList tasks={taskList} deleteHandler={deleteHandler} />
		</div>
	);
}

export default App;
