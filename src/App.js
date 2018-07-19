import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Discover from './components/Discover';
// import Repositories from './components/Repositories';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route path="/search" component={Search} />
      <Route path="/owner" component={Discover} />
    </Switch>
  </div>
);
export default App;
