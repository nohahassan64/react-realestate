import React , { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './components/globalStyle'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Slidbar from './components/Slidbar/Slidbar'
import Home from './pages/Home'
import About from './pages/About'
import Homes from './pages/Homes'
import Rentals from './pages/Rentals'
import Footer from './components/Footer/Footer'

const App = () => {
  const [ isOpen , setIsOpen ] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
        <>
          <BrowserRouter>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar toggle={toggle} />
            <Slidbar toggle={toggle} isOpen={isOpen} />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route path='/homes' component={Homes} />
              <Route path='/rentals' component={Rentals} />
              <Route path='/' component={Home} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </>
  )
}

export default App
