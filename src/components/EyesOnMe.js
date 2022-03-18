import React , { useState } from 'react';

function EyesOnMe(){
    const [ isFocus ,setIsOn ] = useState(true)
    // console.log({isFocus ? "Good!" : "Hey! Eyes on me!"})
    return (
        <button 
        onFocus={(e) => {console.log("Good!"); }}
        onBlur={(e) => {console.log('Hey! Eyes on me!');}}
        >Eyes on me</button>
    )
}
export default EyesOnMe;