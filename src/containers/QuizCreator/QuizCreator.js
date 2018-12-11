import React from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends React.Component {

    submitHandler(event) {
        event.preventDefault();
    }

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {
        
    };

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        
                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
