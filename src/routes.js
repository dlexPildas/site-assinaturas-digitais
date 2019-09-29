import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";

// import { Container } from './styles';

import Main from "./pages/Main/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
