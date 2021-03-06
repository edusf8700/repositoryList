import styled, { keyframes } from 'styled-components';

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

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #7159c1;
    }

    & + li {
      border-top: 2px solid #eee;
    }
  }
`;
