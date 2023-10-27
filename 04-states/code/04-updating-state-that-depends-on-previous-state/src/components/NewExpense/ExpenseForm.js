import "./ExpenseForm.css";

import { useState } from "react";

// date, item, price

const ExpenseForm = (props) => {

    const [title, setEnteredTitle] = useState('')
    const [price, setEnteredPrice] = useState('')
    const [date, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredPrice:'',
    //     enteredDate:''
    // })

    const titleChangedHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     // with the use of the spread operator, keep the original and override with enterdTitle
        //     enteredTitle: event.target.value
        // })

        // setEnteredTitle((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })

        setEnteredTitle(event.target.value)

    }

    const priceChangedHandler = (event) => {
        setEnteredPrice(event.target.value)
        // setEnteredPrice((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value)
         // setEnteredDate({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title: title,
            price: price,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')

    }

 
  return <form onSubmit={submitHandler}>

    <div className="new-expense__controls">

        <div className="new-expense__control">

            <label>Title</label>
            <input type="text" value={title} onChange={titleChangedHandler}></input>
        
        </div>

        <div className="new-expense__control">

            <label>Amout</label>
            <input type="number" value={price} min="0.01" step="0.01" onChange={priceChangedHandler}></input>
        
        </div>

        <div className="new-expense__control">

            <label>Date</label>
            <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}></input>
        
        </div>

    </div>

    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>

  </form>;
};

export default ExpenseForm;

