import React from 'react';
import DisplayItem from './DisplayItem';
import classes from './DisplayData.module.css';

const DisplayData = (props) => {
  const delete_list = (deleteelementid) =>{
    props.deletenote(deleteelementid);
  }

  return <div className={classes.notessection}>
    {props.items.map( item =>(
      <DisplayItem key={item.id} id={item.id} title={item.title} date={item.date} note={item.note} ondelete={delete_list} ></DisplayItem>
    ))} 
  </div>;
}

export default DisplayData;
