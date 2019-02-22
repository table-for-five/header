import React from 'react'
// import styled from 'styled-components';

const { styled } = window;


const MinMax = styled.div`
font-size: 14px;
font-weight: 500;
line-height: 20px;
margin-left: 6px;
font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`




class Price extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        {/* SVG */}
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" style=
        {{background:'rgb(255, 255, 255)', marginTop:'-3'}}><title>icon/ic_price_range</title>
        <desc>Created with Sketch.</desc><defs></defs><g id="Symbols" stroke="none" strokeWidth="1"
         fill="none" fillRule="evenodd"><g id="icon/ic_price_range"><g id="ic_price_range">
         <rect id="boundry" x="0" y="0" width="24" height="24"></rect><rect id="outside" 
         stroke="#333333" strokeWidth="2" x="3" y="6" width="18" height="12" rx="2"></rect>
         <rect id="line" fill="#333333" x="3" y="6" width="3" height="3" rx="0.5"></rect>
         <rect id="line" fill="#333333" x="18" y="6" width="3" height="3" rx="0.5"></rect>
         <rect id="line" fill="#333333" x="3" y="15" width="3" height="3" rx="0.5"></rect>
         <rect id="line" fill="#333333" x="10" y="10" width="4" height="4" rx="2"></rect>
         <rect id="line" fill="#333333" x="18" y="15" width="3" height="3" rx="0.5"></rect>
         </g></g></g></svg>
        <MinMax>{'$' + this.props.restaurant.price_min + ' to $' + this.props.restaurant.price_max}</MinMax>
        {/* <div style={{marginLeft: '4px'}}>{'to $' + this.props.restaurant.price_max}</div> */}
      </div>
    )
  }
}

export default Price;