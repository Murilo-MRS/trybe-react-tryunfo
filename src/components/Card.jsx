import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card-container">
        <p data-testid="name-card">
          NOME:
          {cardName}
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">
          ATK:
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          DEF:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          STM:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          RARITY:
          {cardRare}
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
