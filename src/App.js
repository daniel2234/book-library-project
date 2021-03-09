import React from 'react';
import BookLibrary from './components/BookLibrary';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <BookLibrary/>
      </div>
    )
  }
}

export default App;
