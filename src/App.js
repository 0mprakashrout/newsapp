
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=15
  state={
   progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
      <Routes>
          <Route exact path="/" element={ <News setProgress =  {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} >
          </Route>
          <Route exact path="/Business" element={ <News setProgress =  {this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} >
          </Route>
          <Route exact path="/Entertainment" element={ <News setProgress =  {this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} >
          </Route>
          <Route exact path="/General" element={ <News setProgress =  {this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} >
          </Route>
          <Route exact path="/Health" element={ <News setProgress =  {this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} >
          </Route>
          <Route exact path="/Science" element={ <News setProgress =  {this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} >
          </Route>
          <Route exact path="/Sports" element={ <News setProgress =  {this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} >
          </Route>
          <Route exact path="/Technology" element={ <News setProgress =  {this.setProgress} key="" pageSize={this.pageSize} country="in" category="technology" />} >
          </Route>
        </Routes>
      </Router>
      </div>
    )
  }
}

