import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showExpenseDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            expense: {}
        };
    }

    componentDidMount() {
        console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:8082/api/expenses/' + this.props.match.params.id)
            .then(res => {
                console.log("Print-showExpenseDetails-API-response: " + res.data);
                this.setState({
                    expense: res.data
                })
            })
            .catch(err => {
                console.log("Error from ShowExpenseDetails");
            })
    };

    onDeleteClick(id){
        axios
            .delete('http://localhost:8082/api/expenses/' + id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error from ShowExpenseDetails_deleteClick");
            });
    };

    render() {
        const expense = this.state.expense;
        let ExpenseItem = <div>
            <table className="table table-hover table-dark">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>{ expense.Name }</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Expense Type</td>
                        <td>{ expense.Type }</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Amount</td>
                        <td>{ expense.Amount }</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Date</td>
                        <td>{ expense.Date }</td>
                    </tr>
                </tbody>
            </table>
        </div>

        return(
            <div className="ShowExpenseDetails">
                <div className="container">

                    <div className="row">
                        <div className="col-mid-10 m-auto">
                            <br /> <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Expense List
                            </Link>
                        </div>
                        <br />
                        <div className="col-mid-8 m-auto">
                            <h1 className="display-4 text-center">Expense's Record</h1>
                            <p className="lead text-center">
                                View Expense's Info
                            </p>
                            <br /> <br />
                        </div>
                    </div>

                    <div>
                        { ExpenseItem }
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,expense._id)}>
                                Delete Expense
                            </button>
                            <br />
                        </div>

                        <div className="col-mid-6">
                            <Link to={`/edit-expenses/${expense._id}`} className="btn btn-outline-info btn-lg btn-block">
                                Edit Expense
                            </Link>
                            <br />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default showExpenseDetails;