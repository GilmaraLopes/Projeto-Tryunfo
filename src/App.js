// import { number } from 'prop-types';
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
    savedCards: [],
    hasTrunfo: false,
  };

  // função para validar botão//
  validaButton = () => {
    const tamMax = 90;
    const max = 210;
    // const min = -1;
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const varName = cardName && cardDescription && cardImage && cardRare;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const atrib1 = cardAttr1 >= 0 && cardAttr1 <= tamMax;
    const atrib2 = cardAttr2 >= 0 && cardAttr2 <= tamMax;
    const atrib3 = cardAttr3 >= 0 && cardAttr3 <= tamMax;
    const sumAtrib = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const valor = sumAtrib <= max;
    if (atrib1
      && atrib2
      && atrib3
      && varName
      && valor) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  salvaButton = (e) => {
    e.preventDefault();
    const { cardName,
      cardDescription,
      cardImage, cardAttr1,
      cardAttr2, cardAttr3,
      cardRare, cardTrunfo,
    } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    };
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    }), () => {
      this.setState({
        hasTrunfo: !this.validaTrunfo(),
      });
    });
  };

  validaTrunfo = () => {
    const { cardTrunfo } = this.state;

    if (!cardTrunfo) return true;
  };

  // função para atualizar o estado//
  onInputChange = (e) => {
    const { name, type, checked } = e.target;
    const value = type === 'checkbox' ? checked : e.target.value;
    // if (type === 'checkbox') {
    //   this.setState({ cardTrunfo: checked });
    // } else {
    this.setState({ [name]: value }, () => this.validaButton());
  };

  render() {
    const { savedCards } = this.state;
    return (
      <div>
        <h1>ADICIONE NOVA CARTA </h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.salvaButton }
          // isSaveButtonDisabled={ this.validaButton }
        />
        <Card { ...this.state } />
        { savedCards.map((element, index) => <Card { ...element } key={ index } />)}

      </div>
    );
  }
}

export default App;
