import React, {Component} from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from './../../components/UI/Loader/Loader';

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [],
        loader: true
    };

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    };

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    };

    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {
                    [answerId]: 'success'
                },
                results
            });

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
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
            results[question.id] = 'error';
            this.setState({
                answerState: {
                    [answerId]: 'error',
                },
                results
            });
        }
    };

    async componentDidMount() {
        try {
            const url = `/quizes/${this.props.match.params.id}.json`;
            const response = await axios.get(url);
            const quiz = response.data;
            this.setState({
                loader: false,
                quiz
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {this.state.loader
                        ? <Loader/>
                        : this.state.isFinished
                            ? <FinishedQuiz
                                onRetry={this.retryHandler}
                                results={this.state.results}
                                quiz={this.state.quiz}
                            />
                            : <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;