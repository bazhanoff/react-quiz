import React from 'react';
import classes from './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer, index) => (
                    <AnswerItem
                        key={index}
                        answer={answer}
                    />
                )
            )}
        </ul>
    )
};

export default AnswersList;