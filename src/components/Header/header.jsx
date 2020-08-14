import React from 'react';
import Balance from '../balanсe';
import TotalIncome from '../total-income';
import TotalExpenses from '../total-expenses';
import './header.css';

export default class Header extends React.Component {
    render() {
        const { history } = this.props;

        const incomeArr = history.filter((item) => item.article === 'доход');
        const expensesArr = history.filter((item) => item.article === 'расход');
        
            const expenses = expensesArr.map((item) => item.sum);
            let expensesSum = expenses.reduce(function(a, b)  {
                    return a + b
            }, 0)
        
            const income = incomeArr.map((item) => item.sum);
            let incomeSum = income.reduce(function(a, b)  {
                    return a + b
            }, 0)

        const balance = incomeSum - expensesSum;

        return (
            <section className="total">
                <Balance total={balance}/>
                <div className="total__main">
                    <TotalIncome total={incomeSum}/>
                    <TotalExpenses total={expensesSum}/>
                </div>
            </section>
        )
    }
}