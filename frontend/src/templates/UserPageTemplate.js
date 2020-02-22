import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/NewItemBar/NewItemBar';
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 40%;
  z-index: 10000;
`;

class UserPageTemplate extends React.Component {
  state = {
    isItemBarVisible: false,
  };

  handlePlusButtonClick = () => {
    this.setState(prevState => ({
      isItemBarVisible: !prevState.isItemBarVisible,
    }));
  };

  handleClose = () => {
    this.setState({
      isItemBarVisible: false,
    });
  };

  render() {
    const { children, pageType, numberOfNotes } = this.props;
    return (
      <>
        <Sidebar pageType={pageType} />
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeading big>{pageType}</StyledHeading>
            <StyledParagraph>
              {numberOfNotes} {pageType}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGridWrapper>{children}</StyledGridWrapper>
          <StyledButtonIcon
            icon={plusIcon}
            activeColor={pageType}
            onClick={this.handlePlusButtonClick}
          />
          <NewItemBar
            handleClose={this.handleClose}
            isVisible={this.state.isItemBarVisible}
            pageType={pageType}
          />
        </StyledWrapper>
      </>
    );
  }
}

UserPageTemplate.propTypes = {
  numberOfNotes: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default UserPageTemplate;
