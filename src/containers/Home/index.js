import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
const Home = (props) => {
  const { name } = props;
  return (
    <div>
      <Header />
      <div>Home {name}</div>
      <button onClick={() => {
        console.log('click');
      }}>button</button>
    </div>
  );
}
const mapStateToProps = state => ({
  name: state.name,
});

export default connect(mapStateToProps, null)(Home);