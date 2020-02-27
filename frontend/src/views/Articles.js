import React from 'react';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import { fetchNotes } from 'actions';
import UserPageTemplate from '../templates/UserPageTemplate';

class Articles extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles = [] } = this.props;
    return (
      <UserPageTemplate pageType="articles" numberOfNotes={articles.length}>
        {articles.map(item => (
          <Card
            cardType="articles"
            title={item.title}
            content={item.content}
            articleUrl={item.articleUrl}
            id={item._id}
            key={item._id}
          />
        ))}
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  articles,
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchNotes('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
