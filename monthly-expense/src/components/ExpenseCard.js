import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const expenseCard = (props) => {
    const expense = props.expense;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-expenses/${expense._id}`}>
                        { expense.name }
                    </Link>
                </h2>
                <h3>{expense.type}</h3>
                <h3>{expense.amount}</h3>
            </div>
        </div>
    );
}

export default expenseCard;