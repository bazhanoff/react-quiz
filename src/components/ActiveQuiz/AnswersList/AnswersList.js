import React from 'react';
import classes from './AnswersList.css';

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => {
                    <li>answer</li>
                }
            )}
        </ul>
    )
};

export default AnswersList;