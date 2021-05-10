import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import EditRequestClass from "./EditRequestClass"
import UserList from "./UserList"
import UserListActive from "./UserListActive"
import EditPayment from "./EditPayment"
import ProjectList from "./ProjectList"
import AddCourse from "./addCourse"

function App_admin() {
    return (
        <Router>
          <Switch>
            <Route path="/admin/class-requisition" exact component={Class} />
            <Route path="/admin/payment-requisition" component={Payment} />
            <Route path={"/edit-request-class/:id"} component={EditRequestClass} />
            <Route path={"/edit-payment/:id"} component={EditPayment} />
            <Route path="/admin/user-list" component={UserList} />
            <Route path="/admin/user-list-active" component={UserListActive} />
            <Route path="/admin/project-list" component={ProjectList} />
            <Route path="/admin/add-course" component={AddCourse} />
          </Switch>
        </Router>
    );
}

export default App_admin;
