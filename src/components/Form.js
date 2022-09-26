import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <label htmlFor="Nome">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="Descricao">
          Descrição
          <input type="textarea" data-testid="description-input" maxLength="100" />
        </label>
        <label htmlFor="Atrib">
          Attr01
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="Atrib">
          Attr02
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="Atrib">
          Attr03
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="Imagem">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="Opcao">
          Raridade
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        Super Trybe Trunfo
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="button" data-testid="save-button">Salvar</button>

      </div>
    );
  }
}
