import React from 'react';
import Card from 'components/Card/Card';
import UserPageTemplate from '../templates/UserPageTemplate';

const articles = [
  {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    id: 3,
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '10 days',
  },
];

const Articles = () => (
  <UserPageTemplate pageType="articles">
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

export default Articles;
