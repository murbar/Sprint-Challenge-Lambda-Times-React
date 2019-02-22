import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};
