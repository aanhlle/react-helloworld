import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseToggleState, setExpenseToggleState] = useState("off");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseToggleState("off");
  };

  const cancelHandler = () => {
    setExpenseToggleState("off");
  };

  const expandHandler = () => {
    setExpenseToggleState("on");
  };

  if (expenseToggleState === "off") {
    return (
      <div className="new-expense">
        <button onClick={expandHandler}>Add new expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    </div>
  );
};

export default NewExpense;
