import React from 'react';

export default class TotalIncome extends React.Component {
    render() {
        const {total = 0} = this.props;
        return (
            <div className="total__main-item total__income">
                <h4>Доходы</h4>
                <p className="total__money total__money-income">
                +{total}₽
                </p>
            </div>
        )
    }
}