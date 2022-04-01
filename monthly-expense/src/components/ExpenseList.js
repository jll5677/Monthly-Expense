import React from 'react';
import '../App.css';
import * as utility from '../utility/utility.js';


const ExpenseList = (props) => {
    const expense = props.expense;
    /*
    const navigate = useHistory();
    const handleRowClick = () => {
        history.push(`/show-expense/${expense._id}`);
    }
    */
    return(
        
        
        <tr>
            <td>{expense.name}</td>
            <td>{expense.type}</td>
            <td>{expense.amount}</td>
            <td>{utility.getConvertedDate(expense.date)}</td>
        </tr>


/*
        <div className="card-container">
            <Link to={`/show-expense/${expense._id}`}>
                <div className="desc">
                    <h2>
                        
                        { expense.name }
                        
                    </h2>
                    <h3>{expense.type}</h3>
                    <h3>{expense.amount}</h3>
                </div>
            </Link>
        </div>
*/
    );
}

export default ExpenseList;