import React from "react";
import "./ListOfNote.css";
import ListItem from "./ListItem";

const ListOfNote = props => {
	return (
		<div>
			{props.onNote.map(note => {
				return <ListItem getText={note.text}
                key={note.id}
                getId ={note.id}
                HendleDelete={props.onDelate}
                />
			})}
		</div>
	);
};

export default ListOfNote;
