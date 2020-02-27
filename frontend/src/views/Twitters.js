import React from 'react';
import Card from 'components/Card/Card';
import { connect } from 'react-redux';
import UserPageTemplate from '../templates/UserPageTemplate';
import { fetchNotes } from '../actions';
class Twitters extends React.Component {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters = [] } = this.props;
    return (
      <UserPageTemplate pageType="twitters" numberOfNotes={twitters.length}>
        {twitters.map(item => (
          <Card
            cardType="twitters"
            title={item.title}
            content={item.content}
            twitterName={item.twitterName}
            id={item._id}
            key={item._id}
          />
        ))}
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ twitters }) => ({
  twitters,
});

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchNotes('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
