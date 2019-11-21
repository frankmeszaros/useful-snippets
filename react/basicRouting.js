import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const FooComponent = () => <div>foo</div>;

export default ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}`} component={FooComponent} />
    <Redirect to={`${url}/foo`} />
  </Switch>
);
