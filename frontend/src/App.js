import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styled, {ThemeProvider} from "styled-components"

import {DarkMode} from "./components/minor/DarkMode.jsx"
import {Toggle} from "../src/components/minor/Toggle.jsx"
import {GlobalStyle, lightTheme, darkTheme} from "../src/components/minor/GlobalStyle.jsx"

import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import RegisterMentor from "./components/pages/RegisterMentor"
import ForgotPassword from "./components/pages/ForgotPassword"
import ResetPassword from "./components/pages/ResetPassword"
import Profile from "./components/pages/Profile.jsx"
import ChangePassword from "./components/pages/ChangePassword"
import AddProfile from "./components/pages/AddProfile.jsx"
import Help from "./components/pages/help/Help";
import Homepage from "./components/pages/homepage/Homepage.jsx"
import Tutorial from "./components/pages/tutorial/Tutorial.jsx"
import Roadmap from "./components/pages/tutorial/course/roadmap/Roadmap"
import Pricing from "./components/pages/pricing/Pricing.jsx"
import CategoryDetail from "./components/pages/tutorial/CategoryDetail.jsx"
import TopicDetail from "./components/pages/tutorial/TopicDetail.jsx"
import Course from "./components/pages/tutorial/course/internet/Course"
import Challenge from "./components/pages/challenge/Challenge.jsx"
import MenuChallenges from "./components/pages/challenge/MenuChallenges.jsx"
import ProjectDetail from "./components/pages/challenge/ProjectDetail.jsx"
//Punya Kosasie
// import Submit from "./components/pages/challenge/Certificate/Submit.jsx"

//Punya Cahya
import Submit from "./components/pages/challenge/certificate/Submit.jsx"
// import Challenge from "./components/pages/challenge/Challenge.jsx"

import RoadmapFrontend from "./components/pages/tutorial/course/roadmap/content/RoadmapFrontend.jsx"
import RoadmapBackend from "./components/pages/tutorial/course/roadmap/content/RoadmapBackend.jsx"
import RoadmapReact from "./components/pages/tutorial/course/roadmap/content/RoadmapReact.jsx"
import RoadmapDevops from "./components/pages/tutorial/course/roadmap/content/RoadmapDevops.jsx"

import AngularCerti from "./components/pages/challenge/certificate/AngularCerti.jsx"

import Class from "./components/pages/class session/Class.jsx"
import ClassDetail from "./components/pages/class session/ClassDetail.jsx"
import BootcampHome from "./bootcamp/BootcampHome.jsx"
import News from "./components/pages/news/News.jsx"
import { NewsContextProvider } from "./components/pages/news/NewsContext.jsx"
import RegisterBootcamp from "./bootcamp/RegisterBootcamp.jsx"
import PremiumPlanPay from "./components/pages/pricing/PremiumPlanPay.jsx"
import ConsultationPay from "./components/pages/pricing/ConsultationPay.jsx"
import SessionPay from "./components/pages/pricing/SessionPay.jsx"
import FeedbackForm from "./components/major/Feedback/FeedbackForm.jsx"
import HTML from "./components/pages/tutorial/course/HTML/HTML.jsx"

import CertificateAngular from "./components/pages/challenge/certificate/Download Certificate/CertiAngular/CertificateAngular.jsx"

import Career from "./components/pages/career/Career.jsx"
import CareerDetail from "./components/pages/career/CareerDetail.jsx"
import ConsultationClass from "./components/pages/consultation class/ConsultationClass.jsx"
import ComingSoon from "./components/major/ComingSoon.jsx"

import ScrollToTop from "./components/minor/ScrollToTop"
import Schedule from "./bootcamp/Schedule.jsx"
import Purchase from "./components/pages/Purchase/Purchase.jsx"
import HistorySubmit from "./components/pages/History Submit/HistorySubmit.jsx"

const Container = styled.div``;
const ThemeToggle = styled.div``;

function App() {
  const [ theme, toggleTheme] = DarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <Router>
      <ScrollToTop/>
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyle />
          <ThemeToggle className="minor flex items-center gap-5 z-10">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </ThemeToggle>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/help" component={Help} />
            <Route path="/login" component={Login} />
            <Route path="/forgotPassword/:hash" component={ForgotPassword} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route path="/ChangePassword/:name-:hash" component={ChangePassword} />
            <Route path="/register" component={Register} />
            <Route path="/profile/:name" component={Profile} />
            <Route path="/edit-profile/:name" component={AddProfile} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/history-submit-project" component={HistorySubmit} />

            <Route path="/pricing/:name" component={Pricing} />
            <Route path="/payment-confirmation-premium-plan" component={PremiumPlanPay} />
            <Route path="/payment-confirmation-class-consultation-quota" component={ConsultationPay} />
            <Route path="/payment-confirmation-class-session-quota" component={SessionPay} />

            <Route path="/roadmap" component={Roadmap} />
            <Route path="/roadmap-frontend" component={RoadmapFrontend} />
            <Route path="/roadmap-backend" component={RoadmapBackend} />
            <Route path="/roadmap-react" component={RoadmapReact} />
            <Route path="/roadmap-devops" component={RoadmapDevops} />

            <Route path="/tutorial" component={Tutorial} />

            <Route path="/bootcamp" component={BootcampHome}/>
            <Route path="/register-bootcamp/:name" component={RegisterBootcamp}/>
            <Route path="/schedule" component={Schedule}/>

            <Route path="/coming-soon" component={ComingSoon} />

            <Route path="/category-detail-:id/:hash" component={CategoryDetail} />
            <Route path="/topic-detail/:id-:hash" component={TopicDetail} />
            <Route path="/:course/:id-:id3/:id2" component={Course} />

            <Route path="/html" component={HTML} />
            <Route path="/challenge" component={Challenge} />
            <Route path="/list-challenges/:id-:hash" component={MenuChallenges} />
            <Route path="/project-:type/:id-:hash" component={ProjectDetail} />
            <Route path="/submit-solution/:id" component={Submit} />

            <Route path="/challenge" component={Challenge} />
            <Route path="/angular-exercise" component={AngularCerti} />

            <Route path="/CertificateAngular/:id" component={CertificateAngular} />
            
            <Route path="/consultation-class" component={ConsultationClass} />
            <Route path="/class-session" component={Class} />
            <Route path="/detail-class/:id-:hash" component={ClassDetail} />

            <Route path="/feedback/:name" component={FeedbackForm} />

            <Route path="/career" component={Career} />
            <Route exact path="/detail-career/:id-:hash" component={CareerDetail} />

            <Route path="/register-mentor" component={RegisterMentor} />

            <NewsContextProvider>
              <Route path="/news" component={News}/>
            </NewsContextProvider>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
