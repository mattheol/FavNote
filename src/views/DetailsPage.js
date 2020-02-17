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
    const note = {
      title: 'Wish you React',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
      twitterName: 'sarah_edo',
    };
    return (
      <DetailsTemplate
        pageType={this.state.pageType}
        title={note.title}
        content={note.content}
        articleUrl={note.articleUrl}
        created={note.created}
        twitterName={note.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetailsPage;
