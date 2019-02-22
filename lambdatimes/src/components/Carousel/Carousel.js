import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrcs: [],
      currentImgIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      imgSrcs: carouselData
    });
  }

  leftClick = () => {
    let newIndex = this.state.currentImgIndex;
    newIndex--;
    const lastImgIndex = this.state.imgSrcs.length - 1;
    if (newIndex < 0) {
      newIndex = lastImgIndex;
    }
    this.setState({ currentImgIndex: newIndex });
  };

  rightClick = () => {
    let newIndex = this.state.currentImgIndex;
    newIndex++;
    const lastImgIndex = this.state.imgSrcs.length - 1;
    if (newIndex > lastImgIndex) {
      newIndex = 0;
    }
    this.setState({ currentImgIndex: newIndex });
  };

  selectedImage = () => {
    const { imgSrcs, currentImgIndex: i } = this.state;
    return <img src={imgSrcs[i]} style={{ display: 'block' }} alt="Carousel" />;
  };

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
