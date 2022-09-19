import React from "react";

import ExpenseForms from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)

        props.onAddExpenseData(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForms onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense