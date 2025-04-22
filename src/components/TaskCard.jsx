import React from 'react';
// import { tasks } from '../data/task1'; // Default to task1, will be updated based on props

const TaskCard = ({ number, taskData }) => {
    const task = taskData[number - 1]; // Adjusting for zero-based index

    return (
        <div className="task-card">
            <h2>Task for {number}</h2>
            <p>{task}</p>
        </div>
    );
};

export default TaskCard;