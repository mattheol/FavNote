import React from 'react';
import Input from 'components/Input/Input';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';
import logoIcon from 'assets/icons/logo.svg';
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

const LoginPage = () => (
  <Wrapper>
    <StyledLogo src={logoIcon} />
    <Heading style={{ marginTop: '0', textAlign: 'center' }}>
      Your new favourite online notes experience
    </Heading>
    <StyledForm>
      <Heading style={{ textAlign: 'center', margin: '0' }}>Sing in</Heading>
      <StyledInput placeholder="login" />
      <StyledInput placeholder="password" />
      <Button style={{ marginTop: '30px' }} activeColor="notes">
        {' '}
        Login{' '}
      </Button>
      <StyledLink href="yotube.com">I want to register</StyledLink>
    </StyledForm>
  </Wrapper>
);

export default LoginPage;
