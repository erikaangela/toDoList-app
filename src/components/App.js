import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import TodoCreate from "./todos/TodoCreate.js";
import TodoEdit from "./todos/TodoEdit";
import TodoDelete from "./todos/TodoDelete";
import TodoList from "./todos/TodoList";
import TodoShow from "./todos/TodoShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/todos/new" exact component={TodoCreate} />
            {/* id can be named anything && either "id" you nav to will show TodoEdit */}
            {/* We can actually put as many wildcard params as we want */}
            <Route path="/todos/edit/:id" exact component={TodoEdit} />
            <Route path="/todos/delete/:id" exact component={TodoDelete} />
            <Route path="/todos/:id" exact component={TodoShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
