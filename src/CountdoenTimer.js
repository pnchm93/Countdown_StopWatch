import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formattedTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const calculateProgress = () => {
    return (time / initialTime) * 100;
  };

  const getCircleStyle = () => {
    const progress = calculateProgress();
    const strokeWidth = 10;
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return {
      strokeDasharray: `${circumference}px`,
      strokeDashoffset: `${offset}px`,
    };
  };

  const getCircleColor = () => {
    const progress = calculateProgress();
    const red = Math.round((255 * progress) / 100);
    const green = Math.round((255 * (100 - progress)) / 100);
    return `rgb(${red}, ${green}, 0)`;
  };

  const update=()=>{
    setTime(time+10)
  }
  return (
    <div className="countdown-timer">
      <svg className="countdown-timer__circle" width="200" height="200">
        <circle className="countdown-timer__circle-background" cx="100" cy="100" r="90"></circle>
        <circle
          className="countdown-timer__circle-progress"
          cx="100"
          cy="100"
          r="90"
          style={getCircleStyle()}
          stroke={getCircleColor()}
        ></circle>
      </svg>
      <text className="countdown-timer__text "  x="50%" y="50%"  >
      {formattedTime()}
    </text>
      <button className='btn' onClick={update}>+ 10 sec</button>
    </div>
  );
};

export default CountdownTimer;
