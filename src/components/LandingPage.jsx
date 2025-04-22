import React, { useState } from 'react';
import SpinnerWheel from './SpinnerWheel';
import { tasks as task1 } from '../data/task1';
import { tasks as task2 } from '../data/task2';

const LandingPage = () => {
    const [passcode, setPasscode] = useState('');
    const [tasks, setTasks] = useState(null);

    const handlePasscodeChange = (event) => {
        setPasscode(event.target.value);
    };

    const handlePasscodeSubmit = (event) => {
        event.preventDefault();
        if (passcode === 'tata') {
            setTasks(task1); // Set task1 if passcode is correct
        } else {
            setTasks(task2); // Set task2 otherwise
        }
    };

    return (
        <div className="landing-page">
            <h1>Welcome to the Wheel Spinner Game</h1>
            <form onSubmit={handlePasscodeSubmit}>
                <input
                    type="text"
                    value={passcode}
                    onChange={handlePasscodeChange}
                    placeholder="Enter Passcode"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {tasks && <SpinnerWheel tasks={tasks} />} {/* Pass tasks to SpinnerWheel */}
        </div>
    );
};

export default LandingPage;