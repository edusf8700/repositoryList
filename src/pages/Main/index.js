import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Form, SubmitButton, Conteiner, List } from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newRepo: '',
    repos: [],
    loading: false,
  };

  componentDidMount() {
    const repos = localStorage.getItem('repos');

    if (repos) {
      this.setState({ repos: JSON.parse(repos) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repos } = this.state;

    if (prevState.repos !== repos) {
      localStorage.setItem('repos', JSON.stringify(repos));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repos } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repos: [...repos, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repos, loading } = this.state;

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
          {repos.map(r => (
            <li key={r.name}>
              <spam>{r.name}</spam>
              <Link to={`/repository/${encodeURIComponent(r.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Conteiner>
    );
  }
}
