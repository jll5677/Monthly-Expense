import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateExpense extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      Type: '',
      Amount: '',
      date: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      Name: this.state.name,
      Type: this.state.type,
      Amount: this.state.amount,
      Date: this.state.date
    };

    axios
      .post('http://localhost:8082/api/expenses', data)
      .then(res => {
        this.setState({
            name: '',
            Type: '',
            Amount: '',
            date: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in creating expense!");
      })
  };

  render() {
    return (
      <div className="CreateExpense">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Expense List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Expense</h1>
              <p className="lead text-center">
                  Create new Expense
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the expense'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Type'
                    name='type'
                    className='form-control'
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Amount'
                    name='amount'
                    className='form-control'
                    value={this.state.amount}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='date'
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateExpense;