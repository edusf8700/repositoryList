import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Form, SubmitButton, Conteiner } from './styles';

export default function Main() {
  return (
    <Conteiner>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositório" />
        <SubmitButton>
          <FaPlus size={14} color="#fff" />
        </SubmitButton>
      </Form>
    </Conteiner>
  );
}
