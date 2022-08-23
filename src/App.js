import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   hasTrunfo,
    //   isSaveButtonDisabled,
    //   onInputChange,
    //   onSaveButtonClick,
    // } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
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
