import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ExpenseCard = (props) => {
    const expense = props.expense;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-expenses/${expense._id}`}>
                        { expense.Name }
                    </Link>
                </h2>
                <h3>{expense.Type}</h3>
                <h3>{expense.Amount}</h3>
            </div>
        </div>
    );
}

export default ExpenseCard;