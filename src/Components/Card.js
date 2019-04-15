import React, {Component} from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  width: 200px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  background-color: white;
`

const Trash = styled.i`
  position: absolute;
  margin-top: -30px;
  margin-left: 100px;
  color: #E44157;
`

class Card extends Component {
    
    state = {
        iconsVisible: false
    };

    toggleIcons = () => {
        this.setState({iconsVisible: !this.state.iconsVisible})
    };
    
    render() {
        const { text, cardIndex, columnIndex, moveCard, removeCard } = this.props;
        const { iconsVisible } = this.state;
        return (
            <Wrapper onMouseEnter={this.toggleIcons} onMouseLeave={this.toggleIcons}>
                {iconsVisible && <Trash className="fas fa-trash" onClick={() => removeCard(columnIndex, cardIndex)}/>}
                {columnIndex > 0 ? <i className="fas fa-chevron-left" onClick={() => moveCard(columnIndex, cardIndex, -1)}/> : <div/>}
                <p>{text}</p>
                {columnIndex < 3 ? <i className="fas fa-chevron-right" onClick={() => moveCard(columnIndex, cardIndex, 1)}/> : <div/>}
            </Wrapper>
        );
    };
}

export default Card;