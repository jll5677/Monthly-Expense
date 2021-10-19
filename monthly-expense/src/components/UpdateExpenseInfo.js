import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateExpenseInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Type: '',
            Amount: '',
            Date: ''
        };
    }

    componentsDidMount(){
        axios
            .get('http://localhost:8082/api/expenses/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    Name: res.data.Name,
                    Type: res.data.Type,
                    Amount: res.data.Amount,
                    Date: res.data.Date
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
            Name: this.state.Name,
            Type: this.state.Type,
            Amount: this.state.Amount,
            Date: this.state.Date
        };

        axios
            .put('http://localhost:8082/api/expenses/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-expenses/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateExpenseInfo!");
            })
    };

    render(){
        return(
            <div className="UpdateExpenseInfo">
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

                    <div className="col-mid-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="Name">Name</label>
                                <input
                                    type='text'
                                    placeholder='Name of the Expense'
                                    name='Name'
                                    className='form-control'
                                    value={this.state.Name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="Type">Type</label>
                                <input
                                    type='text'
                                    placeholder='Type of the Expense'
                                    name='Type'
                                    className='form-control'
                                    value={this.state.Type}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="Amount">Amount</label>
                                <input
                                    type='number'
                                    placeholder='Amount of the Expense'
                                    name='Amount'
                                    className='form-control'
                                    value={this.state.Amount}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label htmlFor="Date">Date</label>
                                <input
                                    type='date'
                                    placeholder='Date of the Expense'
                                    name='Date'
                                    className='form-control'
                                    value={this.state.Date}
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