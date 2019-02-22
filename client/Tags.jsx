import React from 'react'
import styled from 'styled-components';


const TagText = styled.div`
  font-size: 1.125rem;
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`


const ButtonStyle = styled.button`
  border-bottom-color: rgb(216,217,219);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid #da3743;
  }
`


class Tags extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <TagText>Top Tags:</TagText>
        <ButtonStyle>{this.props.restaurant.tag_one}</ButtonStyle>
        <ButtonStyle>{this.props.restaurant.tag_two}</ButtonStyle>
        <ButtonStyle>{this.props.restaurant.tag_three}</ButtonStyle>
      </div>
    )
  }
}

export default Tags;