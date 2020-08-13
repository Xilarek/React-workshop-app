import React, {  Component } from 'react';
import Title from '../Title';
import Header from '../Header';
import History from '../History-block';
import Operations from '../Operations';

import './App.css';
import './normalize.css';

export default class App extends Component {
    render() {
        return (
            <>
              <Title/>
              <main>
                <div className="container">
                    <Header/>
                    <History/>
                    <Operations/>
                </div>
              </main>
            </>
        );
    }
}

