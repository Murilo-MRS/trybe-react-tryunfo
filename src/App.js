import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    inputFilter: '',
    selectFilter: 'todas',
    checkboxFilter: false,
  };

  verifyInput = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const max = 90;
    const min = 0;
    const maxAtt = 210;
    const attMax = Number(cardAttr1) <= max
      && Number(cardAttr2) <= max
      && Number(cardAttr3) <= max;
    const attMin = Number(cardAttr1) >= min
      && Number(cardAttr2) >= min
      && Number(cardAttr3) >= min;
    const attMinMax = attMin && attMax;
    const maxSumAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validationAtt = attMinMax && maxSumAtt <= maxAtt;
    if (cardName && cardDescription && cardImage && cardRare && validationAtt) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  verifyTrunfo = () => {
    const { data } = this.state;
    const lengthTrunfo = data.filter((e) => e.cardTrunfo === true).length;
    if (lengthTrunfo > 0) {
      this.setState({ hasTrunfo: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.verifyInput();
      },
    );
  };

  // ao apertar o botao salva
  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      data,
    } = this.state;
    const cardObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    // Ajuda do filipe Lima turma B
    const arrObj = [...data, cardObject];
    this.setState(
      {
        data: arrObj,
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardImage: '',
        cardTrunfo: false,
      },
      this.verifyTrunfo,
    );
  };

  // deleta carta e habilita hastrunfo
  deleteCard = (objCard) => {
    const { data } = this.state;
    const dataRemove = data.filter((e) => e !== objCard);

    if (objCard.cardTrunfo) {
      this.setState({
        data: dataRemove,
        hasTrunfo: false,
      });
    }
    this.setState({
      data: dataRemove,
    });
  };

  filterDataName = ({ target }) => {
    const { value } = target;
    this.setState({ inputFilter: value });
  };

  filterDataRarity = ({ target }) => {
    const { value } = target;
    this.setState({ selectFilter: value });
  };

  filterDataTrunfo = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ checkboxFilter: value });
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      data, inputFilter, selectFilter, checkboxFilter,
    } = this.state;
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <div className="form-container">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <h2>Todas as cartas</h2>
        <h3>Filtros de busca</h3>
        <input
          type="text"
          value={ inputFilter }
          onChange={ this.filterDataName }
          data-testid="name-filter"
          disabled={ checkboxFilter }
        />
        <select
          data-testid="rare-filter"
          onChange={ this.filterDataRarity }
          value={ selectFilter }
          disabled={ checkboxFilter }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo">
          Super Trunfo
          <input
            type="checkbox"
            onChange={ this.filterDataTrunfo }
            data-testid="trunfo-filter"
          />
        </label>

        {/* filtra input text */}
        {data && data.filter((e) => e.cardName.includes(inputFilter))
          .filter((e) => {
            if (selectFilter === 'todas') return e;
            return e.cardRare === selectFilter;
          })
          .filter((e) => (checkboxFilter ? e.cardTrunfo : e))
          .map((e) => (
            <div key={ e.cardName }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.deleteCard(e) }
              >
                Excluir
              </button>
            </div>
          ))}
      </div>
    );
  }
}
export default App;
