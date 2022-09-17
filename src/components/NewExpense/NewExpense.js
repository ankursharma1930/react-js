import React from "react";

import ExpenseForms from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForms/>
        </div>
    )
}

export default NewExpense