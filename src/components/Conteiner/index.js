import styled from 'styled-components';

const Conteiner = styled.div`
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
      margin-right: 10px;
    }
  }
`;

export default Conteiner;
