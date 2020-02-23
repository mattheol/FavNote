import React from 'react';
import Input from 'components/Input/Input';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import logoIcon from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.notes};
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px 70px;
  border-radius: 10px;
`;

const StyledInput = styled(Input)`
  margin: 20px 0 0 0;
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 25px 0;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
  border: none;
  margin: 0;
  padding: 0;
`;

class LoginPage extends React.Component {
  state = {
    isLoginPath: true,
  };

  componentDidMount() {
    console.log('xd');
    const { match } = this.props;
    if (match.path === '/register') {
      this.setState({ isLoginPath: false });
    }
  }

  componentDidUpdate() {
    if (this.props.match.path === '/register' && this.state.isLoginPath) {
      this.setState({ isLoginPath: false });
    }
    if (this.props.match.path === '/login' && !this.state.isLoginPath) {
      this.setState({ isLoginPath: true });
    }
  }

  render() {
    const { isLoginPath } = this.state;
    return (
      <Wrapper>
        <StyledLogo src={logoIcon} />
        <Heading style={{ marginTop: '0', textAlign: 'center' }}>
          Your new favourite online notes experience
        </Heading>
        <StyledForm>
          <Heading style={{ textAlign: 'center', margin: '0' }}>
            Sign {isLoginPath ? 'in' : 'up'}
          </Heading>
          <StyledInput placeholder="username" />
          <StyledInput placeholder="password" />
          <Button style={{ marginTop: '30px' }} activeColor="notes">
            {isLoginPath ? 'log in' : 'register'}
          </Button>
          <StyledLink as={Link} to={`/${isLoginPath ? 'register' : 'login'}`}>
            I want to {isLoginPath ? 'register' : 'log in'}
          </StyledLink>
        </StyledForm>
      </Wrapper>
    );
  }
}

export default LoginPage;
