import React,{useState} from "react";


const Counter = (props) => {
  const[text , settext]=useState("");
  const[output, setoutput]=useState("");
  const[reverse, setreverse]=useState("")
const handleChange=(event)=>{
  settext(event.target.value)
}

const handleClick = () =>{
  settext(text.toUpperCase());
}

const handlesClick=()=>{
  setoutput(text.length);

}
const handleReverse=()=>{
setreverse(text.split("").reverse().join(""));
}



  return (
    <div>
     <div >
      <h1>{props.title}</h1>
      <h3>Enter the text</h3>
      <textarea className="form-control" rows="8" value={text} onChange={handleChange}/>
      <button className="btn btn-primary m-3 "onClick={handleClick}>convert to uppercase</button>
      <button className="btn btn-primary" onClick={handlesClick}>Count the number of character</button> 
      <button className="btn btn-primary m-3" onClick={handleReverse}>Reverse</button>
      <p>Your text has {output} characters</p>
      <p>{reverse}</p>
     
     </div>
    </div>
  );
};

export default Counter;
