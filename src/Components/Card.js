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

class Card extends Component {
    render() {
        const { text, cardIndex, columnIndex, moveCard } = this.props;
        return (
            <Wrapper>
                {columnIndex > 0 ? <i className="fas fa-chevron-left" onClick={() => moveCard(columnIndex, cardIndex, -1)}/> : <div/>}
                <p>{text}</p>
                {columnIndex < 3 ? <i className="fas fa-chevron-right" onClick={() => moveCard(columnIndex, cardIndex, 1)}/> : <div/>}
            </Wrapper>
        );
    }
}

export default Card;