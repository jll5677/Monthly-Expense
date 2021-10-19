import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateExpense from './components/CreateExpense';
import ShowExpenseList from './components/ShowExpenseList';
import ShowExpenseDetails from './components/ShowExpenseDetails';
import UpdateExpenseInfo from './components/UpdateExpenseInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowExpenseList} />
          <Route path='/create-expenses' component={CreateExpense} />
          <Route path='/show-expenses/:id' component={ShowExpenseDetails} />
          <Route path='/edit-expenses/:id' component={UpdateExpenseInfo} />
        </div>
      </Router>
    );
  }
}

export default App;
