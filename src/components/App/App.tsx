import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../NavBar/NavBar'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTES } from '../../Constants/Routes'
import Imprint from '../Imprint/Imprint'

export default function App() {
  return (
    <React.Fragment>
      <Router basename="/">
        <NavBar />
        <Switch>
          <Route exact path={ROUTES.home}>
            <AboutMe />
            <Projects />
          </Route>
          <Route path={ROUTES.imprint}>
            <Imprint />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  )
}
