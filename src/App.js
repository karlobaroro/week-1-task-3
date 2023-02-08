import React, { Component } from 'react';
import DisplayNavbar from './DisplayNavbar';
import DisplayForm from './DisplayForm';
import DisplayCard from './DisplayCard';
import './App.css';

class App extends Component {
  state = {
    userData: []
  }

  addUserInfo = (props) => {
    let userData = [...this.state.userData, props];

    this.setState({
      userData
    })
  }

  render() {
    return (
      <div>
        <DisplayNavbar/>
        <DisplayForm addUserInfo={this.addUserInfo}/>
        <DisplayCard userInfo={this.state.userData}/>
      </div>
    );
  }
}

export default App;