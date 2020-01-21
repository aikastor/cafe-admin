import React, {Fragment} from 'react';
import {Route, Switch} from "react-router";

import AdminPage from "./containers/AdminPage/AdminPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import AddMenuItem from "./containers/AddMenuItem/AddMenuItem";

const App = () => {
  return (
      <div>
        <Fragment>
          <Switch>
            <Route path='/orders/' exact component={OrdersPage}/>
            <Route path='/add/' exact component={AddMenuItem}/>
            <Route path='/' exact component={AdminPage}/>
          </Switch>
        </Fragment>
      </div>
  );
};

export default App;