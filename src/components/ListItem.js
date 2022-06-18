import React from "react";
import styled from './ListItem.module.css'


const ListItem = (props)=>{

    function Delete (event){
       props.HendleDelete(props.getId)
    }

    return(
        <div className={styled.text} onClick={Delete} >{props.getText}</div>
    )
}

export default ListItem