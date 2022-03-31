import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import * as utility from '../utility/utility.js';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';

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
                <Container>
                    <Row className="navMargin">
                        <Col xs={8} md={8}>
                                <h2 style={{float: 'left'}} className="display-4 text-center">Update Expense</h2>
                        </Col>

                        <Col xs={4} md={4}>
                            <Link to="/" style={{float: 'right'}} className="display-4 text-center">
                                <Button variant="warning">Show Expense List</Button>
                            </Link>   
                        </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="md-8 rowMargin">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                        />
                        </Form.Group>
                        <Form.Group className="md-8 rowMargin">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            type="text"
                            name="type"
                            value={this.state.type}
                            onChange={this.onChange}
                            required
                        />
                        </Form.Group>
                        <Form.Group className="md-8 rowMargin">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                            required
                        />
                        </Form.Group>
                        <Form.Group className="md-8 rowMargin">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange}
                            required
                        />
                        </Form.Group>
                        <Form.Group className="text-center">
                        <Button variant="outline-warning" type="submit" className="buttonPadding">Update Expense</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default UpdateExpenseInfo;