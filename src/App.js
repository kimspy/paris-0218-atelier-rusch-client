import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Homepage from './components/Homepage.js'
import Atelier from './components/Atelier.js'
import Contact from './components/Contact.js'
import LabRusch from './components/LabRusch.js'
import Projets from './components/Projets.js'
import { store } from './store'
import './App.css'

const views = {
  home: Homepage,
  atelier: Atelier,
  projets: Projets,
  lab: LabRusch,
  submitArticlePage: Homepage,
  contact: Contact
}

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  setActivePage = (event) => this.setState({ pageActive: event.target.value })

  render () {
    return (
      <div className="App">
        <Nav onPageChange = {this.setActivePage} />
        {views[this.state.pageActive](this.state)}
      </div>
    )
  }
}

export default App
