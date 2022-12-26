import React from 'react'
import "./App.css";

function Main() {
    const [myNum,setMyNum] = React.useState(0)
    return (
     <>
     <span>
        {myNum}
     </span>
        <button onClick={()=>{
            setMyNum(myNum +1)
        }} className="btns">Increment</button>
        <button onClick={ ()=> myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0) }className="btns">Decrement</button>
     </>
    );
}

export default Main
