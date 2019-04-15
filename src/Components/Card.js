import React, {Component} from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 5px;
  width: 190px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: white;
`

const Trash = styled.i`
  position: absolute;
  margin-top: -35px;
  margin-left: 190px;
  color: #E44157;
`

const Text = styled.div`
  word-wrap: break-word;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`

const Arrow = styled.i`
  padding: 10px;
`

class Card extends Component {
    
    state = {
        iconsVisible: false
    };

    toggleIcons = () => {
        this.setState({iconsVisible: !this.state.iconsVisible})
    };
    
    render() {
        const { text, cardIndex, columnIndex, moveCard, removeCard, changeCard } = this.props;
        const { iconsVisible } = this.state;
        return (
            <Wrapper onMouseEnter={this.toggleIcons} onMouseLeave={this.toggleIcons}>
                {iconsVisible && <Trash className="fas fa-trash" onClick={() => removeCard(columnIndex, cardIndex)}/>}
                {columnIndex > 0 ? <Arrow className="fas fa-chevron-left" onClick={() => moveCard(columnIndex, cardIndex, -1)}/> : <div/>}
                <Text onClick={() => changeCard(columnIndex, cardIndex)}>{text}</Text>
                {columnIndex < 3 ? <Arrow className="fas fa-chevron-right" onClick={() => moveCard(columnIndex, cardIndex, 1)}/> : <div/>}
            </Wrapper>
        );
    };
}

export default Card;