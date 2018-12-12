import React from 'react';
import classes from './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import {createControl} from './../../form/formFramework.js'
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
    return createControl({
            label: `Вариант ${number}`,
            errorMessage: 'Значение не может быть пустым',
            id: number,
        }, {required: true}
    );
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)

    };
}

export default class QuizCreator extends React.Component {
    state = {
        quiz: [],
        formControls: createFormControls(),
        rightAnswerId: 1
    };


    submitHandler(event) {
        event.preventDefault();
    }

    addQuestionHandler = () => {

    };

    createQuizHandler = () => {

    };

    changeHandler = (value, controlName) => {

    };

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        });

    };

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Auxiliary key={controlName + index}>
                    <Input
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => {
                            this.changeHandler(event.target.value, controlName)
                        }}
                    />
                    {index === 0 ? <hr/> : null}
                </Auxiliary>

            )
        });
    };

    render() {
        const select =  <Select
            label="Выберите правильный ответ"
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: '1', value: '1'},
                {text: '2', value: '2'},
                {text: '3', value: '3'},
                {text: '4', value: '4'},
            ]}
        />;
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}
                        {select}
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
