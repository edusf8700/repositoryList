import styled from 'styled-components';

export const Title = styled.h1`
  color: ${pros => (pros.error ? 'red' : '#7159c1')};
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;

  small {
    color: #333;
  }
`;
