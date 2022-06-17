import React, { useState } from "react";
import "./App.css";
import NoteInput from "./components/NoteInput";
import ListOfNote from "./components/ListOfNote";

function App() {
	const [allNotes, setAllNotes] = useState([
		{
			id: 1,
			key: 1,
			text: "Tu będą twoje Notakti",
		},
	]);

	const UserNoteHandeler = thatNote => {
		setAllNotes(prevNotes => {
			const updateNote = [...prevNotes];
			updateNote.unshift({
				text: thatNote,
				id: Math.random(),
			});
			return updateNote;
		});
	};
	const deleteNote = gettedId => {
		setAllNotes(prevNotes => {
			const updatedGoals = prevNotes.filter(idNote => idNote.id !== gettedId);
			return updatedGoals;
		});
	};

	return (
		<div>
			<NoteInput onnNoteTake={UserNoteHandeler} />
			<ListOfNote onNote={allNotes} onDelate={deleteNote} />
		</div>
	);
}

export default App;
