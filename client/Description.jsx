import React from 'react'
import styled from 'styled-components';


const ParagraphText = styled.div`
  color: #2d333f;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -webkit-box-direction: reverse;
  height: 608;
  width: 70;
  display: block;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`
const ReadMore = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #da3743;
  line-height: 20px;
  margin-top: 2px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`

class Description extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showMore: false,
      remainingText: ''
    };
    this.getRemainingText = this.getRemainingText.bind(this);
  }


  getRemainingText() {
    var remainingLines = [];
    for(var i = 2; i < this.props.firstLine.length; i++) {
      remainingLines.push(this.props.firstLine[i])
    }
    this.setState({
      remainingText: remainingLines,
      showMore: !this.state.showMore,
    })
  }

  render() {
    return(
      <div style={{display:'flex',  flexDirection: 'column' }}>
        <ParagraphText>{this.props.firstLine[0] +'\n'+ this.props.firstLine[1] +'\n'+this.props.firstLine[2] + '...'}</ParagraphText>
        <ReadMore onClick={this.getRemainingText} style={{display: this.state.showMore ? 'none' : 'block'}}>+ Read more</ReadMore>
        <ParagraphText style={{display: this.state.showMore ? 'block' : 'none'}}>{this.state.remainingText}</ParagraphText>
        <ReadMore onClick={this.getRemainingText} style={{display: this.state.showMore ? 'block' : 'none'}}>- Read less</ReadMore>
      </div>
    )
  }
}


export default Description;