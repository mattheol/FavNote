import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;
    let type;
    if (match.path === '/twitters/:id') {
      type = 'twitters';
    } else if (match.path === '/notes/:id') {
      type = 'notes';
    } else {
      type = 'articles';
    }
    this.setState({ pageType: type });
  }

  render() {
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <>
          <h1>HUHUH</h1>
        </>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetailsPage;
