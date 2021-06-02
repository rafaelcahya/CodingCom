import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import EditRequestClass from "./EditRequestClass"
import UserList from "./UserList"
import UserListActive from "./UserListActive"
import ProjectList from "./ProjectList"
import AddBatch from "./AddBatch"
import Course from "./Course"
import ListCourse from "./ListCourse"
import ListBatch from "./ListBatch"
import ListProject from "./ListProject.jsx"
import InputJobs from "./InputJobs.jsx"
import AddProject from "./AddProject.jsx"
import EditProject from "./EditProject.jsx"
import BootcampSchedule from "./BootcampSchedule.jsx"

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
              <Route path="/admin/course/:id" component={Course} />
              <Route path="/admin/list-course" component={ListCourse} />
              <Route path="/admin/input-jobs" component={InputJobs} />
              <Route path="/admin/add-project" component={AddProject} />
              <Route path="/admin/edit-project/:id" component={EditProject} />
              <Route path="/admin/add-batch" component={AddBatch} />
              <Route path="/admin/list-project" component={ListProject} />
              <Route path="/admin/list-batch" component={ListBatch} />
              <Route path="/admin/bootcamp-schedule" component={BootcampSchedule} />
            </Switch>
          </Router>
    );
}

export default App_admin;
