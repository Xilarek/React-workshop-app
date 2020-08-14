import React from 'react';

export default class TotalExpenses extends React.Component {
    render() {
        const {total = 0} = this.props;
        return (
            <div className="total__main-item total__expenses">
                <h4>Расходы</h4>
                <p className="total__money total__money-expenses">
                    -{total} ₽
                </p>
            </div>
        )
    }
}