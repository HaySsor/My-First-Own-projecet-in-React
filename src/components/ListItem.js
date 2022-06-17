import React from "react";


const ListItem = (props)=>{

    function Delete (event){
       props.HendleDelete(props.getId)
    }

    return(
        <div className="item" onClick={Delete} >{props.getText}</div>
    )
}

export default ListItem