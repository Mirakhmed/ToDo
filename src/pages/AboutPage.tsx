import React from 'react';
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useNavigate();

    return (
        <>
            <h2>ToDo App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus deleniti dicta dolore eaque error eveniet magnam odio, quae quasi.</p>
            <button className="btn" onClick={() => history('/')}>Back to the tasks</button>
        </>
    );
}