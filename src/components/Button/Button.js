import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.note};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;

  ${({ secondary, theme }) =>
    secondary &&
    css`
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
      background-color: ${theme.grey200};
    `}
`;

export default Button;
