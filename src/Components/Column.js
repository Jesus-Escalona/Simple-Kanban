import React, {Component} from 'react';
import styled from 'styled-components'
import Card from "./Card";
import tw from 'tailwind.macro';

const Header = styled.div`
  ${tw`flex justify-center items-center rounded font-mono h-10 text-sm`};
  background-color: ${props => props.color}
`;

const Wrapper = styled.div`
  padding: 12.5px
  width: 200px;
`;

class Column extends Component {



    render() {
        const {index, column: {name, list, color}, callback, moveCard, removeCard, changeCard} = this.props;
        const listWrapper = list.map((e,i) => <Card key={i} columnIndex={index} cardIndex={i} text={e} moveCard={moveCard} removeCard={removeCard} changeCard={changeCard}/>);
        return (
            <Wrapper>
                <Header color={color}>
                    <h2>{name}</h2>
                </Header>
                {listWrapper}
                <h4 onClick={() => callback(index)}>+ Add a Card</h4>
            </Wrapper>
        );
    }
}

export default Column;