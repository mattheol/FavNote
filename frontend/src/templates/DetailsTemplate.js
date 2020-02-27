import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledHeading = styled(Heading)`
  margin: 0 0 10px 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 30px;
`;

const TitleParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled(Button)`
  margin: 20px 0 10px 0;
`;

const StyledWrapper = styled.div`
  max-width: 800px;
  padding: 55px 150px 25px 220px;
  position: relative;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 55px;
  right: 20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const DetailsTemplate = ({
  pageType,
  title,
  created,
  content,
  articleUrl,
  twitterName,
}) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>
      <StyledHeading big>{title}</StyledHeading>
      <TitleParagraph>{created}</TitleParagraph>
      <StyledParagraph>{content}</StyledParagraph>
      {pageType === 'articles' && (
        <StyledLink as="a" href={articleUrl}>
          Open article
        </StyledLink>
      )}
      {pageType === 'twitters' && (
        <StyledImage src={`https://avatars.io/twitter/${twitterName}`} />
      )}
      <StyledButton as={Link} to={`/${pageType}`} activeColor={pageType}>
        save / close
      </StyledButton>
    </StyledWrapper>
  </>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  twitterName: null,
  articleUrl: null,
  title: null,
  content: null,
};

export default DetailsTemplate;
