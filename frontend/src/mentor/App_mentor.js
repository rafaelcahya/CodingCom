import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ClassReq from "./ClassReq.jsx"
import AddCourse from "./AddCourse"
import AddTopik from "./AddTopik"
import EditTopik from "./EditTopik"
import ListTopik from "./ListTopik"
import EditCourse from "./EditCourse"
import ShowCourse from "./ShowCourse.jsx";
import ListCourse from "./ListCourse"
import ListClass from "./ListClass.jsx"
import EditClass from "./EditClass.jsx"
import ListReceipt from "./ListReceipt.jsx"
import ReceiptDetail from "./ReceiptDetail"

function App_mentor() {
    return (
        <Router>
            <Switch>
                <Route exact path="/mentor/class-request" component={ClassReq} />
                <Route exact path="/mentor/add-course" component={AddCourse} />
                <Route exact path="/mentor/add-topik" component={AddTopik} />
                <Route exact path="/mentor/list-topik" component={ListTopik} />
                <Route exact path="/mentor/edit-topik/:id-:hash" component={EditTopik} />
                <Route exact path="/mentor/mentor-edit-course-:id-:hash" component={EditCourse} />
                <Route exact path="/mentor/mentor-show-course-:id-:hash" component={ShowCourse} />
                <Route exact path="/mentor/list-course" component={ListCourse} />
                <Route exact path="/mentor/list-class" component={ListClass} />
                <Route exact path="/mentor/list-receipt" component={ListReceipt} />
                <Route exact path="/mentor/receipt-detail-:id" component={ReceiptDetail} />
                <Route exact path="/mentor/edit-class-:id" component={EditClass} />
            </Switch>
        </Router>
    );
}

export default App_mentor;
