import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import Repositories from './components/Repositories';

const App = () => (
      <div>
        <Switch>
          <Route path='/' component={Search} />
          <Route path='/owner' component={Repositories} />
        </Switch>
      </div>
)
export default App;
