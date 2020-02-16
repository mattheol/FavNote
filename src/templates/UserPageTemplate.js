import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 50px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search" />
        <StyledHeading>{pageType}</StyledHeading>
        <StyledParagraph>6 {pageType}</StyledParagraph>
      </StyledPageHeader>
      <StyledGridWrapper>{children}</StyledGridWrapper>
    </StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default UserPageTemplate;
