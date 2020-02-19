import styled from 'styled-components';

export const Conteiner = styled.div`
  background: #fff;
  margin: 80px auto;
  max-width: 700px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;

    svg {
      margin: 10px;
    }
  }
`;

export const Form = styled.form`
  margin: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 4px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
