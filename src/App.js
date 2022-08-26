import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    inputFilter: '',
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
        cardRare: 'Normal',
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

  filterData = ({ target }) => {
    const { value } = target;
    // const dataFilterName = data.filter((element) => name === element.cardName);
    this.setState({ inputFilter: value });
  };

  // handleFilterName = () => {

  // };

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
      data,
      inputFilter,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
        <h2>Todas as cartas</h2>
        <h3>Filtros de busca</h3>
        <input
          type="text"
          value={ inputFilter }
          onChange={ this.filterData }
          data-testid="name-filter"
        />
        {/* filtra input text */}
        {data && data.filter((e) => e.cardName.includes(inputFilter))
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
