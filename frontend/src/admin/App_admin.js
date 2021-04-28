import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import EditRequestClass from "./EditRequestClass"
function App_admin() {
    return (
        <Router>
          <Switch>
            <Route path="/admin/class-requisition" exact component={Class} />
            <Route path="/admin/payment-requisition" component={Payment} />
            <Route path={"/edit-request-class/:id"} component={EditRequestClass} />
          </Switch>
        </Router>
    );
}

export default App_admin;
