import React from 'react';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';

const Articles = ({ articles }) => (
  <UserPageTemplate pageType="articles" numberOfNotes={articles.length}>
    {articles.map(item => (
      <Card
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
        id={item.id}
        key={item.id}
      />
    ))}
  </UserPageTemplate>
);

const mapStateToProps = ({ articles }) => ({
  articles,
});

export default connect(mapStateToProps)(Articles);
