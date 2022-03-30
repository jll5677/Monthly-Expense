import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import * as utility from '../utility/utility.js';
import {Container, Col, Row, Button} from 'react-bootstrap';

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

    componentDidMount(){
        axios
            .get('http://localhost:8082/api/expenses/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    type: res.data.type,
                    amount: res.data.amount,
                    date: utility.getDate(res.data.date)
                })
                console.log(isNaN(this.state.date))
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

        console.log("date on submit" + data.date);

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
                                    name="name"
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
                                    name='amount'
                                    className='form-control'
                                    value={this.state.amount}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label>Date</label>
                                <input
                                    type='date'
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