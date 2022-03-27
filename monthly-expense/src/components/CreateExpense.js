import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import * as utility from '../utility/utility.js';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';


class CreateExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      amount: '',
      date: utility.getDate()
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    //preventing default method from happening, this way we can have our own custom change
    event.preventDefault();
    
    //packaging the object data into this variable to be sent
    const data = {
      name: this.state.name,
      type: this.state.type,
      amount: this.state.amount,
      date: this.state.date
    }

    //api call to post the data
    axios
      .post('http://localhost:8082/api/expenses/', data)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in creating expenses : " + err);
        console.log(this.state.name + " " + this.state.type + " " + this.state.amount + " " + this.state.date);
      })

  }

  render() {
    return (
      <div className="createExpense">
        <Container>
          <Row className="navMargin">
              <Col xs={8} md={8}>
                      <h2 style={{float: 'left'}} className="display-4 text-center">New Expense</h2>
              </Col>

              <Col xs={4} md={4}>
                  <Link to="/" style={{float: 'right'}} className="display-4 text-center">
                      <Button variant="warning">Show Expense List</Button>
                  </Link>   
              </Col>

          </Row>
          <Form  noValidate onSubmit={this.onSubmit}>
            <Form.Group className="md-8">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="md-8">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={this.state.type}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="md-8">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={this.state.amount}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group className="md-8">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.onChange}
              />
            </Form.Group>
            <Button variant="warning" type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default CreateExpense;