import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 16px;
    color: #7159c1;
    text-decoration: none;
  }

  img {
    height: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
    max-width: 400px;
    line-height: 1.4;
  }
`;
