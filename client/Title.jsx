import React from 'react';
// import styled from 'styled-components';

const { styled } = window;

const Name = styled.h1`
color: #2d333f;
margin-bottom: 15px;
margin-top: 15px;
overflow: hidden;
text-overflow: ellipsis;
font-size: 48px;
font-weight: 700;
line-height: 56px;
//margin-block-start: 0.67em;
//margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
border-bottom: 1px solid grey;
width: 622px;
height: 89px;
font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

class Title extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <Name>{this.props.restaurant.name}</Name>
    )
  }
}

export default Title