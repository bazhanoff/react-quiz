import React from 'react';
import classes from './QuizList.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';

export default class QuizList extends React.Component {
    renderQuizes = () => {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <div key={index}>
                    <li>
                        <NavLink to={'/quiz/' + quiz}>
                            Тест {quiz}
                        </NavLink>
                    </li>
                </div>
            )
        })
    };

    componentDidMount() {
        axios.get('https://react-quiz-ef355.firebaseio.com/quiz.json').then(
            response => {
                console.log(response);
            }
        );
    }

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
