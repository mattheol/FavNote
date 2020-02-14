import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  padding: 0;
  vertical-align: middle;
  margin: 0;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
`;

export default ButtonIcon;
