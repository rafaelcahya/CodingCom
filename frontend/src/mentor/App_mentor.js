import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ClassReq from "./ClassReq.jsx"
import ProjectSub from "./ProjectSub.jsx";
import AddCourse from "./AddCourse"
import AddTopik from "./AddTopik"
import EditTopik from "./EditTopik"
import ListTopik from "./ListTopik"
import EditCourse from "./EditCourse"
import Course from "./Course"
import ListCourse from "./ListCourse"
import EditProject from "./EditProjectSubmission"

function App_mentor() {
    return (
        <Router>
            <Switch>
                <Route path="/mentor/class-request" component={ClassReq} />
                <Route path="/mentor/project-submission" component={ProjectSub} />
                <Route path="/mentor/edit-project-submission/:id" component={EditProject} />
                <Route path="/mentor/add-course" component={AddCourse} />
                <Route path="/mentor/add-topik" component={AddTopik} />
                <Route path="/mentor/list-topik" component={ListTopik} />
                <Route path="/mentor/edit-topik/:id" component={EditTopik} />
                <Route path="/mentor/edit-course/:id" component={EditCourse} />
                <Route path="/mentor/course/:id" component={Course} />
                <Route path="/mentor/list-course/:name" component={ListCourse} />
            </Switch>
        </Router>
    );
}

export default App_mentor;
