import React from 'react';
import classes from './DisplayItem.module.css';

const DisplayItem = (props) => {

  const deletenote= () =>{
    console.log(props.id);
    props.ondelete(props.id);
  }
  
  return <div className={classes.item}>
    <h1>{props.title} </h1>
    <span>{props.date}</span>
    <p>{props.note}</p>
    <i class="fas fa-trash" onClick={deletenote}></i>
  </div>;
}

export default DisplayItem;
