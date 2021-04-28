import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ClassReq from "./ClassReq.jsx"
import ProjectSub from "./ProjectSub.jsx";

function App_mentor() {
    return (
        <Router>
            <Switch>
                <Route path="/mentor/class-request" exact component={ClassReq} />
                <Route path="/mentor/project-submission" exact component={ProjectSub} />
            </Switch>
        </Router>
    );
}

export default App_mentor;
