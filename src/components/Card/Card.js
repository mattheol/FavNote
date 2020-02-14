import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/Paragraph/Paragraph';
import Heading from 'components/Heading/Heading';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ cardType, theme }) =>
    cardType ? theme[cardType] : 'white'};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <StyledHeading>Hello Mati</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
        ducimus fuga repellendus illum
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
