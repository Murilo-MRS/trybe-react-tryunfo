import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">
          Name:
          <input
            type="text"
            name="cardName"
            id="name-input"
            onChange={ onInputChange }
            value={ cardName }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea
            name="cardDescription"
            id="description-input"
            cols="30"
            rows="10"
            onChange={ onInputChange }
            value={ cardDescription }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Attribute 1:
          <input
            type="number"
            name="cardAttr1"
            id="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Attribute 2:
          <input
            type="number"
            name="cardAttr2"
            id="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Attribute 3:
          <input
            type="number"
            name="cardAttr3"
            id="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input
            type="text"
            name="cardImage"
            id="image-input"
            onChange={ onInputChange }
            value={ cardImage }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Rarity:
          <select
            name="cardRare"
            id="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo Card?
          <input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            disabled={ hasTrunfo }
          />
        </label>
        <button
          type="button"
          id="save-button"
          onClick={ () => onSaveButtonClick() }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

// cardName,  string;
// cardDescription,  string;
// cardAttr1,  string;
// cardAttr2,  string;
// cardAttr3,  string;
// cardImage,  string;
// cardRare,  string;
// cardTrunfo,  boolean;
// hasTrunfo,  boolean;
// isSaveButtonDisabled,  boolean;
// onInputChange,  callback;
// onSaveButtonClick,  callback;
