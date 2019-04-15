import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Column from "./Components/Column";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 12.5px
  background-color: lightgray;
`


class App extends Component {

  state = {
    info: [
      {
        color: '#8E6E95',
        name: 'Winnie',
        list: ['Buy eggs', 'Books']
      },
      {
        color: '#39A59C',
        name: 'Bob',
        list: ['Buy eggs', 'Books']
      },
      {
        color: '#344759',
        name: 'Thomas',
        list: ['Buy eggs', 'Books']
      },
      {
        color: '#E8741E',
        name: 'George',
        list: ['Buy eggs', 'Books']
      }
    ]
  };


  componentDidMount() {
    let data = localStorage.getItem("state");
    console.log(data)
    if (data) {
      let k = JSON.parse(data);
      this.setState({info: k})
    }
  };


  addACard = (index) => {
    const {info} = this.state;
    let x = window.prompt();
    let newInfo = info.map((e,i) => {
      if (i === index) {
        e.list= [...e.list, x]
      }
      return e
    });
    this.setState({info: newInfo}, this.setData);
  };

  removeCard = (columnIndex, cardIndex) => {
    const { info } = this.state;

    let newInfo = info.map((e,i) => {
      if (i === columnIndex) {
        e.list = e.list.filter((el,ix) => ix !== cardIndex)
      }
      return e
    });
    this.setState({info: newInfo}, this.setData);
  };

  moveCard = (columnIndex, cardIndex, next) => {
    const {info} = this.state;
    let t = info[columnIndex].list[cardIndex];
    let indexToMove;
    if (next === -1) indexToMove = columnIndex - 1;
    if (next === 1) indexToMove = columnIndex + 1;

    let newInfo = info.map((e,i) => {
      if (i === indexToMove) {
        e.list.push(t)
      }

      if (i === columnIndex) {
        e.list = e.list.filter((el,ix) => ix !== cardIndex)
      }
      return e
    });
    this.setState({info: newInfo}, this.setData);
  };

  setData = () => {
    localStorage.setItem("state", JSON.stringify(this.state.info))
  };

  render() {
    let columnsArray = this.state.info.map((e,i) => <Column key={i} index={i} column={e} callback={this.addACard} moveCard={this.moveCard} removeCard={this.removeCard}/>);
    return (
        <Wrapper>
          {columnsArray}
        </Wrapper>
    );
  }
}

export default App;
