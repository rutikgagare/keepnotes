import React,{useState} from 'react';
import classes from './UserInput.module.css';

const UserInput = (props) => {

  const [enteredtitle,setEnteredTitle] = useState('');
  const [entereddate,setEnteredDate] = useState('');
  const [enterednote,setEnteredNote] = useState('');

  const titlechangehandler = (event) =>{
      setEnteredTitle(event.target.value);
  }

  const datechangehandler = (event) =>{
    setEnteredDate(event.target.value);
  }

  const notechangehandler = (event) =>{
    setEnteredNote(event.target.value);
  }

  const submitformhandler = (event) =>{
    if(enteredtitle.trim().length>0 && entereddate.trim().length>0 && enterednote.trim().length>0){
      props.data(enteredtitle,entereddate,enterednote);
      setEnteredDate('');
      setEnteredTitle('');
      setEnteredNote('');
    }
  }

  return(
    <div className={classes.inputsection}>
        <input
         type="text" id='title' value={enteredtitle} placeholder='Enter Title' onChange={titlechangehandler} />
        <input

         type="date" id='date' value={entereddate} onChange={datechangehandler}/>
        <textarea 
        name="" id="note" placeholder='Enter Note' cols="5" rows="10" value={enterednote} onChange={notechangehandler}>
        </textarea>
        <button onClick={submitformhandler}>Add Note</button>
    </div>
  ); 
   
}

export default UserInput;
