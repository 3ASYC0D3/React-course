import React, {useState} from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormVisibility(false);
    };

    const [formVisibility, setFormVisibility] = useState(false);

    const showFormHandler = () => {
        setFormVisibility(true);
    };

    const hideForm = () => {
        setFormVisibility(false);
    };

    return <div className="new-expense">
        {!formVisibility && <button onClick={showFormHandler}> Add new expense. </button>}
        {formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={hideForm}/>}
    </div>
};

export default NewExpense;