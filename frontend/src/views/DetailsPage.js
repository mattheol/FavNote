import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import axios from 'axios';
class DetailsPage extends React.Component {
  state = {
    item: {},
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ item: activeItem });
    } else {
      axios
        .get(`http://localhost:8080/note/${this.props.match.params.id}`)
        .then(({ data }) => this.setState({ item: data }));
    }
  }
  render() {
    const { item } = this.state;
    return (
      <DetailsTemplate
        pageType={this.props.pageContext}
        title={this.state.item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        twitterName={item.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        item => item._id === ownProps.match.params.id,
      ),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
