import React from 'react';
import classes from './QuizList.css';
import {NavLink} from "react-router-dom";

export default class QuizList extends React.Component {
    renderQuizes = () => {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <div>
                    <li key={index}>
                        <NavLink to={'/quiz/' + quiz}>
                            Тест {quiz}
                        </NavLink>
                    </li>
                </div>
            )
        })
    };

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}
