import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const Timer = () => {

    let navigate = useNavigate();

    const [ minutes, setMinutes ] = useState(8);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        
        return ()=> {
            
            clearInterval(myInterval);
          };
    });

    const goHome = () =>{
        return navigate('/');
    }

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? { goHome }
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;