import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import LoginPage from './LoginPage';
import DetailsPage from './DetailsPage';

const Root = () => (
  <Provider store={store}>
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={LoginPage} />
          <Route exact path="/notes" component={Notes} />
          <Route path="/notes/:id" component={DetailsPage} />
          <Route exact path="/twitters" component={Twitters} />
          <Route path="/twitters/:id" component={DetailsPage} />
          <Route exact path="/articles" component={Articles} />
          <Route path="/articles/:id" component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  </Provider>
);

export default Root;
