import React from 'react';
import Balance from '../balanсe';
import TotalIncome from '../total-income';
import TotalExpenses from '../total-expenses';
import './header.css';

export default class Header extends React.Component {
    render() {
        const { history } = this.props;

        let incomeSum = 0;
        let expensesSum = 0;
        
        const incomeArr = history.filter((item) => item.article === 'доход');
        const expensesArr = history.filter((item) => item.article === 'расход');
        
        
        if (expensesArr.length !== 0) {
            const expenses = expensesArr.map((item) => item.sum);
                  expensesSum = expenses.reduce(function(a, b)  {
                        return a + b
            })
        } else {
            expensesSum = 0;
        }

        if (incomeArr.length !== 0) {
            const income = incomeArr.map((item) => item.sum);
                   incomeSum = income.reduce(function(a, b)  {
                        return a + b
            })
        } else  {
            incomeSum = 0;
        }

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