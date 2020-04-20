import React, {Component} from 'react';
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'
import './App.css';

// index.js에 Provider import 후 provider로 감싸기
class App extends Component {
  state = {
    number: 0
  }
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot/>
        <DisplayNumberRoot/>
      </div>
    );
  }
} export default App;
