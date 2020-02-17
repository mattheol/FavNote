import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';

const Notes = ({ notes }) => (
  <UserPageTemplate pageType="notes" numberOfNotes={notes.length}>
    {notes.map(item => (
      <Card
        cardType="notes"
        title={item.title}
        content={item.content}
        created={item.created}
        id={item.id}
        key={item.id}
      />
    ))}
  </UserPageTemplate>
);

const mapStateToProps = ({ notes }) => ({
  notes,
});

export default connect(mapStateToProps)(Notes);
