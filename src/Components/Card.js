import React, {Component} from 'react';
import styled from "styled-components";


const CardTextWrapper = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  height: auto;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
`;

const Trash = styled.i`
  color: #E44157;
  align-self: flex-end;
`;

const Text = styled.div`
  word-wrap: break-word;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;

const Arrow = styled.i`
  padding: 5px;
`;

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
            <CardWrapper onMouseEnter={this.toggleIcons} onMouseLeave={this.toggleIcons}>
                {iconsVisible && <Trash className="fas fa-trash" onClick={() => removeCard(columnIndex, cardIndex)}/>}
                <CardTextWrapper>
                    {columnIndex > 0 ? <Arrow className="fas fa-chevron-left" onClick={() => moveCard(columnIndex, cardIndex, -1)}/> : <div/>}
                    <Text onClick={() => changeCard(columnIndex, cardIndex)}>{text}</Text>
                    {columnIndex < 3 ? <Arrow className="fas fa-chevron-right" onClick={() => moveCard(columnIndex, cardIndex, 1)}/> : <div/>}
                </CardTextWrapper>
            </CardWrapper>
        );
    };
}

export default Card;