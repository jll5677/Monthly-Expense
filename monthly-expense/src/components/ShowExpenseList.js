import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: []
        }
    };
    
    componentDidMount() {
        axios
            .get('http://localhost:8082/api/expense')
            .then(res => {
                this.setState({
                    expenses: res.data
                })
            })
            .catch(err => {
                console.log('Error showing Expenses!')
            })
    };

    render(){
        const expense = this.state.expense;
        console.log("PrintExpense: " + expenses);
        let expenseList;

        if (!expense) {
            expenseList = "there are no expense recorded";
        } else {
            expenseList = expense.map((expense, i) =>
                <ExpenseCard expense={expense} key={i} />
            );
        }

        return (
            <div className="showExpenseList">
                <div className="containter">
                    <div className="row">
                        <div className="col-mid-12">
                            <br />
                            <h2 className="display-4 text-color">Expense List</h2>
                        </div>

                        <div className="col-mid-11">
                            <Link to="/create-expense" className="btn btn-outline-warning float-right">
                                + Add new Expense
                            </Link>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className="list">
                        {expenseList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowExpenseList;