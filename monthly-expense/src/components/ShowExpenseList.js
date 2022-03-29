import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';

import {Container, Col, Row, Button, Stack} from 'react-bootstrap';


class ShowExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: []
        };
    }
    
    componentDidMount() {
        axios
            .get('http://localhost:8082/api/expenses')
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
        const expenses = this.state.expenses;
        console.log("PrintExpense: " + expenses);
        let expenseList;

        if (!expenses) {
            expenseList = "there are no expense recorded";
        } else {
            expenseList = expenses.map((expense, i) =>
                <ExpenseCard expense={expense} key={i} />
            );
        }

        return (
            // @TODO: Fix landing page
            <div className="showExpenseList"> 
                <Container className="showExpenseList">
                    <Row className="navMargin">
                        <Col xs={8} md={8}>
                                <h2 style={{float: 'left'}} className="display-4 text-center">Expense List</h2>
                        </Col>

                        <Col xs={4} md={4}>
                            <Link to="/create-expense" style={{float: 'right'}} className="display-4 text-center">
                                <Button variant="primary">+ New Expense</Button>
                            </Link>   
                        </Col>

                    </Row>


                    <Stack gap={10}>
                        <Row>
                            {expenseList}
                        </Row>
                    </Stack>
                    
                </Container>
            </div>
        );
    }
}

export default ShowExpenseList;