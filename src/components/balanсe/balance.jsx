import React from 'react';

export default class Balance extends React.Component {
    render() {
        const {total} = this.props;
        return (
            <header className="total__header">
                <h3>Баланс</h3>
                <p className="total__balance">{total} ₽</p>
            </header>
        )
    }
}