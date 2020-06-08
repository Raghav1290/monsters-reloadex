import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchField: '',
      monsters: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchField: e.target.value}, () => {console.log(this.state)})
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({monsters: users}))
  }


  render () {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Relodex</h1>
              <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
