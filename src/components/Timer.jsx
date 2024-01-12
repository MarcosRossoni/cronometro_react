import React from 'react';
import TimerDisplay from "./TimerDisplay.jsx";
import TimerControls from "./TimerControls.jsx";
import LapList from "./LapList.jsx";
import "./Timer.css"

const Timer = () => {
    return (
        <div className="timer-container">
            <TimerDisplay/>
            <TimerControls/>
            <LapList/>
        </div>
    );
};

export default Timer;