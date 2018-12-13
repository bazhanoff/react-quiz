import React from 'react';
import classes from './QuizList.css';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import Loader from './../../components/UI/Loader/Loader';

export default class QuizList extends React.Component {
    state = {
        quizes: [],
        loading: true,
    };

    renderQuizes = () => {
        return this.state.quizes.map(quiz => {
            return (
                <div key={quiz.id}>
                    <li>
                        <NavLink to={'/quiz/' + quiz.id}>
                            {quiz.name}
                        </NavLink>
                    </li>
                </div>
            )
        })
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-ef355.firebaseio.com/quizes.json');
            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            });

            this.setState({
                quizes,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.state.loading
                        ? <Loader/>
                        : <ul>
                            {this.renderQuizes()}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}
