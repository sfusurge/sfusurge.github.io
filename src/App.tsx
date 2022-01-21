import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Nav from './components/Nav'
import Schedule from './pages/Schedule'
import About from './pages/About'
import Home from './pages/Home'
import FAQ from './pages/Faq'
import Sponsors from './pages/Sponsors'
import ScrollProvider from './context/Scroll'
import ScrollContainer from './components/ScrollContainer'

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <ScrollContainer>
          <div className={styles.App}>
            <Router>
              <Nav />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/faq">
                  <FAQ />
                </Route>
                <Route path="/schedule">
                  <Schedule />
                </Route>
                <Route path="/sponsors">
                  <Sponsors />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </div>
        </ScrollContainer>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
