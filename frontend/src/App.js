import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styled, {ThemeProvider} from "styled-components"

import {DarkMode} from "./components/minor/DarkMode.jsx"
import {Toggle} from "../src/components/minor/Toggle.jsx"
import {GlobalStyle, lightTheme, darkTheme} from "../src/components/minor/GlobalStyle.jsx"

import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import ForgotPassword from "./components/pages/ForgotPassword"
import Help from "./components/pages/help/Help";
import PremiumPlan from "./components/pages/homepage/payment/PremiumPlan";
import PremiumPlanPlus from "./components/pages/homepage/payment/PremiumPlanPlus";
import { ScrollToTop } from "./components/minor/scroll to top/ScrollToTop.jsx"
import Homepage from "./components/pages/homepage/Homepage.jsx"
import Tutorial from "./components/pages/tutorial/Tutorial.jsx"
import Roadmap from "./components/pages/tutorial/course/roadmap/Roadmap"
import Pricing from "./components/pages/pricing/Pricing.jsx"
import Internet from "./components/pages/tutorial/course/internet/Internet.jsx"
import WhatisInternet from "./components/pages/tutorial/course/internet/WhatisInternet.jsx"
import InternetWork from "./components/pages/tutorial/course/internet/InternetWork.jsx"
import Whatishttp from "./components/pages/tutorial/course/internet/Whatishttp.jsx"
import Browser from "./components/pages/tutorial/course/internet/Browser.jsx"

const Container = styled.div`
`;

function App() {
  const [ theme, toggleTheme] = DarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <Container>
          <GlobalStyle />
          <div className="minor flex items-center gap-5 z-10">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <ScrollToTop/>
          </div>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/payment-confirmation-premium" component={PremiumPlan} />
            <Route path="/payment-confirmation-premiumplus" component={PremiumPlanPlus} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/roadmap" component={Roadmap} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/internet" component={Internet} />
            <Route path="/what-is-internet" component={WhatisInternet} />
            <Route path="/how-does-internet-work" component={InternetWork} />
            <Route path="/what-is-http" component={Whatishttp} />
            <Route path="/browser" component={Browser} />
            <Route path="/help" component={Help} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
