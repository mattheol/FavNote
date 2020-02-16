import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const DetailsTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

DetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default DetailsTemplate;
