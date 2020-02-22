import React from 'react';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';

const Twitters = ({ twitters }) => (
  <UserPageTemplate pageType="twitters" numberOfNotes={twitters.length}>
    {twitters.map(item => (
      <Card
        cardType="twitters"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        id={item.id}
        key={item.id}
      />
    ))}
  </UserPageTemplate>
);

const mapStateToProps = ({ twitters }) => ({
  twitters,
});

export default connect(mapStateToProps)(Twitters);
