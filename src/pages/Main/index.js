import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Form, SubmitButton, Conteiner, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repo: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repo } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repo: [...repo, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repo, loading } = this.state;

    return (
      <Conteiner>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner size={14} color="#fff" />
            ) : (
              <FaPlus size={14} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repo.map(r => (
            <li key={r.name}>
              <spam>{r.name}</spam>
              <a href="#">Detalhes</a>
            </li>
          ))}
        </List>
      </Conteiner>
    );
  }
}
