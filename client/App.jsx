import React from 'react';
import styled from 'styled-components';
import Title from './Title.jsx';
import $ from 'jquery';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import Price from './Price.jsx';
import Type from './Type.jsx';
import Tags from './Tags.jsx';
import Description from './Description.jsx';


const Border = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: flex-start;
  border-bottom: 1px solid grey;
  width: 622px;
  height: 48px;
  position: absolute;
  top: 56%;
  left: 50%;
  margin: -200px -200px -200px -200px;
  //background-color: black;
`;

const Texts = styled.div`
  display: flex;
  align-items: center;
  padding-top: 14px;
  border-bottom: 1px solid grey;
  &:hover {
    border-bottom: 2px solid red;
    color: #da3743;
  }
  color: #2d333f;
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  height: 20px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-right: 8px;
  padding-bottom: 14px;
  padding-right: 14px;
  text-size-adjust: 100%
`;

const ParentBorder = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: flex-start;
  flex-direction: column;
  //border: 1px solid black;
  width: 620px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -200px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuClicked = React.createRef();
    this.photosClicked = React.createRef();
    this.reviewsClicked = React.createRef();
    this.overviewClicked = React.createRef();
    this.twitterClicked = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      overviewClicked: true,
      photosClicked: false,
      menuClicked: false,
      reviewsClicked: false,
      twitterClicked: false,
      restaurant: '',
      restaurantDescSplit: '',
    }
  }

  handleClick(event) {
  this.setState({
    overviewClicked: false,
    photosClicked: false,
    menuClicked: false,
    reviewsClicked: false,
    twitterClicked: false
  })
  var target = event.target.id;
  this.setState({
    [target]: !this.state[target]
  })
  this[target].current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  componentDidMount() {
    this.getRestaurantByObjectId();
  }

  getRestaurantByObjectId() {
    $.ajax({
      // hardcoded 17
      url: '/overview/17',
      method: 'GET',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          restaurant: data[0],
          restaurantDescSplit: data[0].description.match(/.{78}/g)
        });
      },
    });
  }

  render() {
    return(
      <div>
          <Border ref={this.overviewClicked}>
            <Texts onClick={this.handleClick} id="overviewClicked" style={{color: (this.state.overviewClicked ? "#da3743" : null), borderBottom: (this.state.overviewClicked ? "2px solid #da3743": null) }}>
              Overview
            </Texts>
            <Texts onClick={this.handleClick} id="photosClicked" style={{color: (this.state.photosClicked ? "#da3743" : null),  borderBottom: (this.state.photosClicked ? "2px solid #da3743": null )}}>
              Photos
            </Texts>
            <Texts onClick={this.handleClick} id="menuClicked" style={{color: (this.state.menuClicked ? "#da3743" : null),  borderBottom: (this.state.menuClicked ? "2px solid #da3743": null )}}>
              Menu
            </Texts>
            <Texts onClick={this.handleClick} id="reviewsClicked" style={{color: (this.state.reviewsClicked ? "#da3743" : null),  borderBottom: (this.state.reviewsClicked ? "2px solid #da3743": null )}}>
              Reviews
            </Texts>
            <Texts onClick={this.handleClick} id="twitterClicked" style={{color: (this.state.twitterClicked ? "#da3743" : null),  borderBottom: (this.state.twitterClicked ? "2px solid #da3743": null)}}>
              Twitter
            </Texts>
          </Border>
        <ParentBorder>
          <Title restaurant={this.state.restaurant}/>
          <div style={{display:'flex', justifyContent:'flex-start'}}>
            <Stars restaurant={this.state.restaurant}/>
            <Reviews restaurant={this.state.restaurant}/>
            <Price restaurant={this.state.restaurant}/>
            <Type restaurant={this.state.restaurant}/>
          </div>
          <div style={{display:'flex', justifyContent:'flex-start', marginTop:'25px'}}>
            <Tags restaurant={this.state.restaurant}/>
          </div>
          <div style={{display:'flex', justifyContent:'flex-start', flexWrap: 'wrap', marginTop:'35px', height:'70px', width:'608px'}}>
            <Description restaurant={this.state.restaurant} firstLine={this.state.restaurantDescSplit}/>
          </div>
        </ParentBorder>
        {/* CODE BELOW SHOULD BE INGORED -- ONLY USED FOR SCROLL TESTING */}
        <div ref={this.photosClicked}>Photos</div>
        <div style={{height:'2000px'}}></div>
        <div ref={this.menuClicked}>Menu</div>
        <div style={{height:'2000px'}}></div>
        <div ref={this.reviewsClicked}>Reviews</div>
        <div style={{height:'2000px'}}></div>
        <div ref={this.twitterClicked}>Twitter</div>
      </div>
    )
  }
}

export default App

/*===============*/

