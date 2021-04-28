import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import EditRequestClass from "./EditRequestClass"
import UserList from "./UserList"

function App_admin() {
    return (
        <Router>
          <Switch>
            <Route path="/admin/class-requisition" exact component={Class} />
            <Route path="/admin/payment-requisition" component={Payment} />
            <Route path={"/edit-request-class/:id"} component={EditRequestClass} />
            <Route path="/admin/user-list" component={UserList} />
          </Switch>
        </Router>
    );
}

export default App_admin;
