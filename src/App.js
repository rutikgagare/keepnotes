import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import UserInput from './Components/UserInput';
import DisplayData from './Components/DisplayData';


function App() {
  const[data, setData] = useState([ 
  ]);

  const updatedatahandler = (enteredtitle, entereddate, enterednote) =>{
    const newdata = {
      title: enteredtitle,
      date: entereddate,
      note: enterednote,
      id: Math.random().toString()
    }
    setData(previousdata =>{
      const updateddata = [...previousdata,newdata];
      return updateddata;
    }) 
  }

  const deletenotehandler = (noteid) =>{
    setData(previousdata =>{
      const updateddata = previousdata.filter((item) =>{
        return item.id !== noteid;
      })
      return updateddata;
    }) 
  }

  return (
    <div className='APP'>
     <Navbar></Navbar>
     <UserInput data={updatedatahandler}></UserInput>
     <div>
       <h1>Notes Section</h1>
       <DisplayData items={data} deletenote={deletenotehandler}></DisplayData>
     </div>
    </div>
  )
}

export default App;
