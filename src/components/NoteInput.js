import React, { useState } from "react";
import "./NoteInput.css";

const NoteInput = props => {
	const [enteredValue, setEnteredValue] = useState("");

	const getNoteFromUser = event => {
		setEnteredValue(event.target.value);
	};

	const MoveUpUserNote = event => {
		event.preventDefault();
		props.onnNoteTake(enteredValue);
        clear(event)
	};
    
    const clear =(item) =>{
       let  clearInputValue = item.target.children[0].children[1]
       clearInputValue.value= ''
    }

	return (
		<form onSubmit={MoveUpUserNote}>
			<div>
				<label>Wprowadz swoją notaktę</label>
				<input type="text" onChange={getNoteFromUser} />
			</div>
			<button type="submit">Dodaj</button>
		</form>
	);
};

export default NoteInput;
