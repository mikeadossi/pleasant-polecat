import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import BookDetails from './BookDetails'
import FourOhFour from './FourOhFour'

class App extends Component {

  render() {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
          <Route path='/details/:book_id' component={BookDetails} />
          <Route path='*' component={FourOhFour} />
        </Router>
    )
  }
}

export default App;
