import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 0 60px;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 0;
  height: 100vh;
  max-width: 100vw;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 0.4s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  resize: none;
  min-height: 15vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageType, isVisible }) => (
  <StyledWrapper activeColor={pageType} isVisible={isVisible}>
    <Heading big>Create new {pageType.substr(0, pageType.length - 1)} </Heading>
    <Input placeholder={pageType === 'twitters' ? 'Account Name' : 'Title'} />
    {pageType === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="Description" />
    <Button activeColor={pageType}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageType: 'notes',
  isVisible: true,
};

export default NewItemBar;
