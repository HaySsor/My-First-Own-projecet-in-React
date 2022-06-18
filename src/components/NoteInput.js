import React, { useState } from "react";
import styles from "./NoteInput.module.css";

const NoteInput = props => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValute, setIsValute]=useState(true)

	const getNoteFromUser = event => {
		setIsValute(true)
		setEnteredValue(event.target.value);
	};

	const MoveUpUserNote = event => {
		event.preventDefault();
		if(enteredValue.trim().length === 0){
			setIsValute(false)
			return
		}
		props.onnNoteTake(enteredValue);
        clear(event)
	};
    
    const clear =(item) =>{
       let  clearInputValue = item.target.children[0].children[1]
       clearInputValue.value= ''
	   setEnteredValue('')
    }

	return (
		<form className={`${styles.form} ${!isValute? styles.error: ''}` } onSubmit={MoveUpUserNote}>
			<div>
				<label>Lista Zakupów</label>
				<input type="text" onChange={getNoteFromUser} />
			</div>
			<button className={styles.button} type="submit">Dodaj</button>
		</form>
	);
};

export default NoteInput;
