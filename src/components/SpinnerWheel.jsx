import React, { useState } from 'react';
import '../assets/styles.css';

const SpinnerWheel = ({ tasks }) => {
    const [rotation, setRotation] = useState(0);
    const [finalNumber, setFinalNumber] = useState(null);

    const spinWheel = () => {
        const randomNumber = Math.floor(Math.random() * tasks.length) + 1;
        const spinAngle = 360 * 5 + (randomNumber * (360 / tasks.length));
        setRotation(spinAngle);

        setTimeout(() => {
            setFinalNumber(randomNumber);
        }, 5000);
    };

    return (
        <div className="spinner-container">
            <div className="spinner-arrow"></div>
            <div
                className="spinner-wheel"
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {[...Array(tasks.length)].map((_, index) => (
                    <div
                        key={index}
                        className="wheel-segment"
                        style={{
                            transform: `rotate(${index * (360 / tasks.length)}deg)`,
                        }}
                    >
                        <span>{index + 1}</span>
                    </div>
                ))}
            </div>
            <button onClick={spinWheel} className="spin-button">Spin</button>
            {finalNumber && (
                <div className="task-flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h2>Task for {finalNumber}</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>{tasks[finalNumber - 1]}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpinnerWheel;