import React from 'react';
import styled from 'styled-components';


const Ratings = styled.div`
color:rgb(111, 115, 123);
display:block;
font-family:BrandonText, -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-size:14px;
font-weight:500;
height:20px;
line-height:20.02px;
margin-left:4px;
text-size-adjust:100%;
width: 100.625px;

`

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <i style={{paddingLeft:'10px', paddingRight:'3px', paddingBottom:'5px'}} className="far fa-comment-alt"></i>
        <Ratings>{this.props.restaurant.ratings_num + ' reviews'}</Ratings>
      </div>
    )
  }
}

export default Reviews;