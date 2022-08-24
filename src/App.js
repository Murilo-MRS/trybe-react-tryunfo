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
    hasTrunfo: true,
    isSaveButtonDisabled: true,
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

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.verifyInput();
    });
  };

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
          // onSaveButtonClick={ this.onSaveButtonClick }
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
    );
  }
}

export default App;

// cardName={ cardName }
// cardDescription={ cardDescription }
// cardAttr1={ cardAttr1 }
// cardAttr2={ cardAttr2 }
// cardAttr3={ cardAttr3 }
// cardImage={ cardImage }
// cardRare={ cardRare }
// cardTrunfo={ cardTrunfo }
// hasTrunfo={ hasTrunfo }
// isSaveButtonDisabled={ isSaveButtonDisabled }
// onInputChange={ onInputChange }
// onSaveButtonClick={ onSaveButtonClick }
