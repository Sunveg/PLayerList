import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      players : [],
      searchField : ''
    };
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/hendrasan/epl1920/master/epl1920stat.json')
    .then(response => response.json())
    .then(users => this.setState({ players:users }));
  }

  HandleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const {players, searchField} = this.state;
    const FilteredPlayers = players.filter(player => 
      player.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <img alt='logo' height="200" width="400" src='./pl.png' />
        <h1>PREMIER LEAGUE 19/20</h1>
        <SearchBox
        placeholder='Search Player'
        HandleChange={this.HandleChange}
        />

        <CardList players={FilteredPlayers} />

      </div>
    );
  }
  
}

export default App;
