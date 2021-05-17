import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import EditRequestClass from "./EditRequestClass"
import UserList from "./UserList"
import UserListActive from "./UserListActive"
import ProjectList from "./ProjectList"
import AddCourse from "./AddCourse"
import AddBatch from "./AddBatch"
import Course from "./Course"
import ListCourse from "./ListCourse"
import ListBatch from "./ListBatch"
import InputJobs from "./InputJobs.jsx"

function App_admin() {
    return (
          <Router>
            <Switch>
              <Route path="/admin/class-requisition" exact component={Class} />
              <Route path="/admin/payment-requisition" component={Payment} />
              <Route path={"/edit-request-class/:id"} component={EditRequestClass} />
              <Route path="/admin/user-list" component={UserList} />
              <Route path="/admin/user-list-active" component={UserListActive} />
              <Route path="/admin/project-list" component={ProjectList} />
              <Route path="/admin/add-course" component={AddCourse} />
              <Route path="/admin/course/:id" component={Course} />
              <Route path="/admin/list-course" component={ListCourse} />
              <Route path="/admin/input-jobs" component={InputJobs} />
              <Route path="/admin/add-batch" component={AddBatch} />
              <Route path="/admin/list-batch" component={ListBatch} />
            </Switch>
          </Router>
    );
}

export default App_admin;
