import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Schedule from './pages/Schedule'
import About from './pages/About'
import FAQ from './pages/Faq'
import Themes from './pages/Themes'
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
                <Route path="/" exact>
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
                <Route path="/themes">
                  <Themes />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </div>
        </ScrollContainer>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
