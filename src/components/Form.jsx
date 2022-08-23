import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Name:
          <input type="text" name="" id="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea
            name=""
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Attribute 1:
          <input type="number" name="" id="attr1-input" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          Attribute 2:
          <input type="number" name="" id="attr2-input" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          Attribute 3:
          <input type="number" name="" id="attr3-input" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          Imagem:
          <input type="text" name="" id="image-input" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          Rarity:
          <select name="" id="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Trunfo Card?
          <input type="checkbox" name="" id="trunfo-input" data-testid="trunfo-input" />
        </label>
        <button type="button" id="save-button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
