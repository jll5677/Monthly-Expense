import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import createExpense from './components/CreateExpense';
import showExpenseList from './components/ShowExpenseList';
import showExpenseDetails from './components/ShowExpenseDetails';
import updateExpenseInfo from './components/UpdateExpenseInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={showExpenseList} />
          <Route path='/create-expenses' component={createExpense} />
          <Route path='/show-expenses/:id' component={showExpenseDetails} />
          <Route path='/edit-expenses/:id' component={updateExpenseInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
