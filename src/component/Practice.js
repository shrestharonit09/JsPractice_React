import React ,{useState} from 'react'

const Practice = (event) => {

    const[a,b]=useState("");


    const handleChanged=(event)=>{
        b(event.target.value);   
    }
    const handleClicked=()=>{
        b(a.toUpperCase());
    }
    const handleClicks=()=>{
        b(a.toLowerCase());
    }
    const handleLogic=()=>{
        let str = '';

        for(let i=0;i<a.length;i++){
            if(i===0 || (a[i-2]==='.' && a[i-1]===" ")){
                str+=a[i].toUpperCase()
            }
            else{
            str+=a[i]
            }
        }
        b(str)

    }
    
  return (
    <div>
       <div>
        <textarea className="form-control" value={a} id="" cols="30" rows="10" onChange={handleChanged}></textarea>
        <button className="btn btn-primary m-3"onClick={handleClicked}>convert to upperCase</button>
        <button className="btn btn-primary"onClick={handleClicks}>convert to LowerCase</button>
        <button className="btn btn-primary m-3"onClick={handleLogic}>logic</button>
        <p> the length of a character = {a.length}</p>
        <p>{a} </p>
        
        
        
        
        </div> 
    </div>
  )
}

export default Practice
