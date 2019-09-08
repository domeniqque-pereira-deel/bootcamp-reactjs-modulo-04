import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['NodeJs', 'React JS', 'ReactNative']
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>

        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
