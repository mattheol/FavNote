import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';
import DetailsPage from './DetailsPage';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/notes" />} />
        <Route exact path="/notes" component={Notes} />
        <Route path="/notes/:id" component={DetailsPage} />
        <Route exact path="/twitters" component={Twitters} />
        <Route path="/twitters/:id" component={DetailsPage} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/:id" component={DetailsPage} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
