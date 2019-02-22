import React from 'react';
// import styled from 'styled-components';

const { styled } = window;

const Checked = styled.div`
  color: #da3743;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

const HalfCheck = styled.div`
  color: #da3743;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

const UnChecked = styled.div`
  color: #6f737b;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`

const RatingNum = styled.div`
font-family: BrandonText, -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-size:14px;
font-weight:500;
height:20px;
line-height:20.02px;
margin-bottom:0px;
margin-left:4px;
margin-right:4px;
margin-top:0px;
text-size-adjust:100%;
`

class Stars extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      // TODO: CREATE STARS WITHOUT EXTERNAL LIB, ACCOUNT FOR RATINGS LOWER THAN 3

      <div style={{display:'flex', justifyContent: "flex-start"}}>
        <Checked className="fa fa-star"></Checked>
        <Checked className="fa fa-star"></Checked>
        <Checked className="fa fa-star"></Checked>
        <HalfCheck className="fa fa-star-half-alt" style={{display: this.props.restaurant.rating < 4 ? "block" : "none"}}></HalfCheck>
        <UnChecked className="fa fa-star" style={{display: this.props.restaurant.rating < 4 ? "block" : "none"}}></UnChecked>
        <Checked className="fa fa-star" style={{display: this.props.restaurant.rating > 4 ? "block" : "none"}}></Checked>
        <HalfCheck className="fa fa-star-half-alt" style={{display: this.props.restaurant.rating > 4 ? "block" : "none"}}></HalfCheck>
        <RatingNum>{Number(this.props.restaurant.rating).toFixed(1)}</RatingNum>
      </div>


      // <div>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <Checked className="fa fa-star"></Checked>
      //   <HalfCheck className="fa fa-star-half"></HalfCheck>
      // </div>
    )
  }
}

export default Stars