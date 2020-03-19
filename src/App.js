import React, { Component } from 'react'
import logo from './logo.svg'
import { Button } from 'carbon-components-react'
import './App.scss'
import { Content } from 'carbon-components-react/es/components/UIShell'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './content/LandingPage'
import DashboardPage from './content/DashboardPage'
class App extends Component {
  render () {
    return (
      <>
        <Header />
        <Content>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/DashboardPage' component={DashboardPage} />
          </Switch>
        </Content>
      </>
    )
  }
}

export default App
