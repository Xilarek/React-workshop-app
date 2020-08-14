import React, {  Component } from 'react';
import Header from '../header';
import History from '../history-block';
import Operations from '../operations';
import nexId from 'react-id-generator';

import './style.css';
import './normalize.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {descr: 'Получил зарплату', sum: 30000, article: 'доход', id: nexId()},
                {descr: 'Получил премию', sum: 10000, article: 'расход', id: nexId()}
            ]
        }
    }
    addItem = (text, sum, article) => {
        const newItem = {
            descr: text,
            article,
            sum,
            id: nexId() 
        }

        this.setState(({history}) => {
            const newArr = [...history, newItem];
            return {
                history: newArr
            }
        });
    }

    deliteItem = (id) => {
        this.setState(({history}) => {
            const index = history.findIndex((elem) => elem.id === id)

            const newArr = [...history.slice(0, index), ...history.slice(index + 1)]

            return {
                history: newArr
            }
        });
    }

    
    render() {
        const { history } = this.state;
        
        return (
            <>
              <header>
                <h1>Кошелек</h1>
                <h2>Калькулятор расходов</h2>
              </header>
              <main>
                <div className="container">
                    <Header history={history}/>

                    <History history={history}
                             onDelite={this.deliteItem}/>

                    <Operations onAdd={this.addItem}/>
                </div>
              </main>
            </>
        );
    };
}

