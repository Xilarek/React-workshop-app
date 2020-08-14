import React from 'react';
import ItemIncome from '../history-item-income';
import ItemExpenses from '../history-item-expenses';

export default class History extends React.Component {
    
    render() {
        const {history, onDelite} = this.props;

        const posts = history.map(item => {
            if (typeof(item) === "object" && item !== null && Array.isArray(item) === false
            && Object.entries(item).length !== 0) {
                const {id, article, ...itemProps} = item;

                if (article === 'доход') {
                    return (
                        <li key={id} className="history__item history__item-plus">
                            <ItemIncome {...itemProps}
                            onDelite={()=> onDelite(id)}/>
                        </li>
                    )
                } else if (article === 'расход') {
                    return (
                        <li key={id} className="history__item history__item-minus">
                            <ItemExpenses {...itemProps}
                            onDelite={()=> onDelite(id)}/>
                        </li>
                    )
                }  
            }
        });
        
        return (
            <section className="history">
                <h3>История расходов</h3>
                <ul className="history__list">
                    {posts.length ? posts : <p>Добавьте статьи расходов и доходов!</p>}
                </ul>
            </section>
        )
    }
}