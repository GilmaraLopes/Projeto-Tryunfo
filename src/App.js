import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

  render() {
    return (
      <div>
        <h1>ADICIONE NOVA CARTA </h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
