import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateExpenseInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            type: '',
            amount: '',
            date: ''
        };
    }

    componentsDidMount(){
        axios
            .get('http://localhost:8082/api/expenses/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    type: res.data.type,
                    amount: res.data.amount,
                    date: res.data.date
                })
            })
            .catch(err => {
                console.log("Error from UpdateExpenseInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            type: this.state.type,
            amount: this.state.amount,
            date: this.state.date
        };

        axios
            .put('http://localhost:8082/api/expenses/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-expense/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateExpenseInfo!");
            })
    };

    render(){
        return(
            <div className="updateExpenseInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-mid-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Expense List
                            </Link>
                        </div>

                        <div className="col-mid-8 m-auto">
                            <h1 className="display-4 test-center">Edit Expense</h1>
                            <p className="lead text-center">
                                Updated Expense's Info
                            </p>
                        </div>
                    </div>

                    <div className="col-mid-8 m-auto" >
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type='text'
                                    placeholder='Name of the Expense'
                                    name='name'
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="type">Type</label>
                                <input
                                    type='text'
                                    placeholder='Type of the Expense'
                                    name='type'
                                    className='form-control'
                                    value={this.state.type}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type='number'
                                    placeholder='Amount of the Expense'
                                    name='amount'
                                    className='form-control'
                                    value={this.state.amount}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="date">Date</label>
                                <input
                                    type='date'
                                    placeholder='Date of the Expense'
                                    name='date'
                                    className='form-control'
                                    value={this.state.date}
                                    onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Expense</button>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateExpenseInfo;