import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import { fetchNotes as fetchNotesAction } from '../actions';

class Notes extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    const { notes = [] } = this.props;
    return (
      <UserPageTemplate pageType="notes" numberOfNotes={notes.length}>
        {notes.map(item => (
          <Card
            cardType="notes"
            title={item.title}
            content={item.content}
            id={item._id}
            key={item._id}
          />
        ))}
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ notes }) => ({
  notes,
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotesAction('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
