import React from 'react';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';
import { addItemAction } from 'actions';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageType, isVisible, addItem, handleClose }) => (
  <Formik
    initialValues={{
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
      created: '',
    }}
    onSubmit={values => {
      addItem(pageType, values);
      handleClose();
    }}
  >
    {({ values, handleChange, handleBlur }) => (
      <StyledWrapper activeColor={pageType} isVisible={isVisible}>
        <StyledForm>
          <Heading big>
            Create new {pageType.substr(0, pageType.length - 1)}{' '}
          </Heading>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageType === 'twitters' && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageType === 'articles' && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activeColor={pageType}>
            Add Note
          </Button>
        </StyledForm>
      </StyledWrapper>
    )}
  </Formik>
);

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageType: 'notes',
  isVisible: true,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) =>
    dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(NewItemBar);
