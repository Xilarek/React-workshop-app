import React from 'react';
import './operations.css';

export default class Operations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            sum: '',
            article: ''
        }
    }

    onValueChangeText = (e) => {
        this.setState({
            text: e.target.value.trim(),
        })
    }

    onValueChangeSum = (e) => {
        this.setState({
            sum: +e.target.value.trim(),
        })
    }

    onValueChangeArticle = (e) => {
        this.setState({
            article: e.target.textContent.toLowerCase().trim(),
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            alert('Поле "наименование" не может быть пустым!')
            return;
        } else if (this.state.sum === '' || this.state.sum === 0 ) {
            alert('Поле "сумма" не может быть пустым и быть со значением 0!')
            return;
        } 
        
        this.props.onAdd(this.state.text, this.state.sum, this.state.article) 
                    this.setState({
                    text: '',
                    sum: '',
                    article: ''
                    });

        
    }
    render() {
        return (
            <section className="operation">
                <h3>Новая операция</h3>
                <form id="form"
                      onSubmit={this.onSubmit}>
                    <label>
                        <input type="text"
                               className="operation__fields operation__name"
                               placeholder="Наименование операции"
                               onChange={this.onValueChangeText}
                               value={this.state.text} />
                    </label>
                    <label>
                        <input type="number"
                               className="operation__fields operation__amount"
                               placeholder="Введите сумму"
                               onChange={this.onValueChangeSum}
                               value={this.state.sum} />
                    </label>
                    <div className="operation__btns">
                        <button type="submit"
                                className="operation__btn operation__btn-subtract"
                                onClick={this.onValueChangeArticle}
                                value={this.state.article}
                                >РАСХОД</button>
                        <button type="submit"
                                className="operation__btn operation__btn-add"
                                onClick={this.onValueChangeArticle}
                                value={this.state.article}>ДОХОД</button>
                    </div>

                </form>
            </section>
        )
    }
}