import React from 'react';

export default class ItemIncome extends React.Component {
    render() {
        const {descr, sum, onDelite} = this.props;
        return (
            <>
                {descr}
                <span className="history__money">+{sum} ₽</span>
                <button className="history__delete"
                        onClick={onDelite}>x</button>
            </>
        )
    }
}