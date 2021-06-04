import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ClassReq from "./ClassReq.jsx"
import ProjectSub from "./ProjectSub.jsx";
import AddCourse from "./AddCourse"
import AddTopik from "./AddTopik"
import EditCourse from "./EditCourse"
import Course from "./Course"
import ListCourse from "./ListCourse"

function App_mentor() {
    return (
        <Router>
            <Switch>
                <Route path="/mentor/class-request" exact component={ClassReq} />
                <Route path="/mentor/project-submission" exact component={ProjectSub} />
                <Route path="/mentor/add-course" component={AddCourse} />
                <Route path="/mentor/add-topik" component={AddTopik} />
                <Route path="/mentor/edit-course/:id" component={EditCourse} />
                <Route path="/mentor/course/:id" component={Course} />
                <Route path="/mentor/list-course/:name" component={ListCourse} />
            </Switch>
        </Router>
    );
}

export default App_mentor;
