import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Class from "./Class.jsx"
import Payment from "./Payment.jsx"
import PaymentApproved from "./PaymentAPPROVED"
import PaymentRejected from "./PaymentREJECTED"
import EditRequestClass from "./EditRequestClass"
import EditTopik from "./EditTopik"
import UserList from "./UserList"
import UserListActive from "./UserListActive"
import ProjectList from "./ProjectList"
import AddBatch from "./AddBatch"
import AddCategory from "./AddCategory"
import Course from "./Course"
import ListCourse from "./ListCourse"
import ListBatch from "./ListBatch"
import ListBootcampUser from "./ListBootcampUser"
import ListCategory from "./ListCategory"
import ListTopik from "./ListTopik"
import ListJobs from "./ListJobs"
import ListProject from "./ListProject.jsx"
import InputJobs from "./InputJobs.jsx"
import AddProject from "./AddProject.jsx"
import EditProject from "./EditProject.jsx"
import EditJobs from "./EditJob.jsx"
import BootcampSchedule from "./BootcampSchedule.jsx"
import AddFAQ from "./AddFQA"
import ListFAQ from "./ListFAQ"
import EditFAQ from "./EditFAQ"
import ListSchedule from "./ScheduleList.jsx"
import ListFeedback from "./ListFeedback.jsx"
import EditSchedule from "./EditSchedule.jsx"
import EditCategory from "./EditCategory.jsx"
import EditProjectSubmission from "./EditProjectSubmission"
import AddReceipt from "./AddReceipt.jsx"
import ListReceipt from "./ListReceipt.jsx"
import ReceiptDetail from "./ReceiptDetail"

function App_admin() {
    return (
          <Router>
            <Switch>
              <Route path="/admin/class-requisition" exact component={Class} />
              <Route path="/admin/payment-requisition" component={Payment} />
              <Route path="/admin/payment-approved" component={PaymentApproved} />
              <Route path="/admin/payment-rejected" component={PaymentRejected} />
              <Route path={"/edit-request-class-:id"} component={EditRequestClass} />
              <Route path="/admin/user-list" component={UserList} />
              <Route path="/admin/user-list-active" component={UserListActive} />
              <Route path="/admin/project-list" component={ProjectList} />
              <Route path="/admin/course/:id/:id2" component={Course} />
              <Route path="/admin/list-course" component={ListCourse} />
              <Route path="/admin/input-jobs" component={InputJobs} />
              <Route path="/admin/add-project" component={AddProject} />
              <Route path="/admin/edit-project-:id" component={EditProject} />
              <Route path="/admin/add-batch" component={AddBatch} />
              <Route path="/admin/add-category" component={AddCategory} />
              <Route path="/admin/list-project" component={ListProject} />
              <Route path="/admin/list-batch" component={ListBatch} />
              <Route path="/admin/list-category" component={ListCategory} />
              <Route path="/admin/list-topik" component={ListTopik} />
              <Route path="/admin/edit-topik-:id" component={EditTopik} />
              <Route path="/admin/bootcamp-schedule" component={BootcampSchedule} />
              <Route path="/admin/add-project" component={AddProject} />
              <Route path="/admin/add-faq" component={AddFAQ} />
              <Route path="/admin/list-faq" component={ListFAQ} />
              <Route path="/admin/edit-faq-:id" component={EditFAQ} />
              <Route path="/admin/list-bootcamp-user" component={ListBootcampUser} />
              <Route path="/admin/edit-score-:id" component={EditProjectSubmission} />
              <Route path="/admin/list-jobs" component={ListJobs} />
              <Route path="/admin/edit-job-:id" component={EditJobs} />
              <Route path="/admin/list-schedule" component={ListSchedule} />
              <Route path="/admin/list-feedback" component={ListFeedback} />
              <Route path="/admin/edit-schedule-:id" component={EditSchedule} />
              <Route path="/admin/edit-category-:id" component={EditCategory} />
              <Route path="/admin/add-receipt" component={AddReceipt} />
              <Route path="/admin/list-receipt" component={ListReceipt} />
              <Route exact path="/admin/receipt-detail-:id" component={ReceiptDetail} />
            </Switch>
          </Router>
    );
}

export default App_admin;
