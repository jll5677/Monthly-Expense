import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Ap.css';

import CreateExpense from './components/CreateExpense';
import CreateExpense from './components/ShowExpenseDetails';
import CreateExpense from './components/ShowExpenseList';
import CreateExpense from './components/UpdateExpenseInfo';

class App extends Components {
    render() {
        return (
            <Router>
                <div>
                    <route exact path='/' component={ShowExpenseList} />
                    <route exact path='/create-expense' component={CreateExpense} />
                    <route exact path='/edit-expense/:id' component={UpdateExpenseInfo} />
                    <route exact path='/show-expense/:id' component={ShowExpenseDetails} />
                </div>
            </Router>
        );
    }
}

export default App;