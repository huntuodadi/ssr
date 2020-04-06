import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { name, getData, newsList } = this.props;
    return (
      <div>
        <Header />
        <div>Home {name}</div>
        { newsList && newsList.map(news => (
          <div key={news.id}>
            {news.title}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList,
});
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({ type: 'GET_NEWS' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);