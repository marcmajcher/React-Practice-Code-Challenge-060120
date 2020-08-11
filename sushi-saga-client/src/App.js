import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = 'http://localhost:3000/sushis';
const numSushi = 4;

class App extends Component {
  state = {
    sushis: [],
    index: 0,
    money: 100,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((sushis) => this.setState({ sushis }));
  }

  handleMoreSushi = () =>
    const newIndex = this.state.index + numSushi;
    this.setState({
      index: newIndex > this.state.sushis.length - 1 ? 0 : newIndex,
    });
  };

  handleEatSushi = (sushi) => {
    if (this.state.money >= sushi.price && !sushi.eaten) {
      this.setState({ money: this.state.money - sushi.price });
      this.setState({
        sushis: this.state.sushis.map((roll) => {
          const newRoll = { ...roll };
          if (sushi.id === newRoll.id) {
            newRoll.eaten = true;
          }
          return newRoll;
        }),
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleMoreSushi={this.handleMoreSushi}
          handleEatSushi={this.handleEatSushi}
          sushis={this.state.sushis.slice(
            this.state.index,
            this.state.index + numSushi
          )}
        />
        <Table
          plates={this.state.sushis.filter((roll) => roll.eaten)}
          money={this.state.money}
        />
      </div>
    );
  }
}

export default App;
