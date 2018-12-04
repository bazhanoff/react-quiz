import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error'}
        quiz: [{
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            id: 1,
            answers: [
                {text: 'Чёрный', id: 1},
                {text: 'Синий', id: 2},
                {text: 'Красный', id: 3},
                {text: 'Зелёный', id: 4}
            ]
        },
            {
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ],
    };

    isQuizFinished = () => {
        return this.state.activeQuestion + 1  === this.state.quiz.length
    };

    onAnswerClickHandler = (answerId, AnswerItem) => {
        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId === answerId) {
            // AnswerItem.current.style.borderColor = 'green';
            this.setState({
                answerState: {
                    [answerId]: 'success'
                }
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log("Finished");
                } else {
                    this.setState((prevState) => {
                        return (
                            {
                                activeQuestion: prevState.activeQuestion + 1,
                                answerState: null
                            }
                        )
                    })
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {
                    [answerId]: 'error'
                }
            });
        }
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;