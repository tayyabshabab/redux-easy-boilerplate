import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* actions */
import * as actionCreators from 'actions/auth';

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

@connect(
  state => state.auth,
  dispatch => bindActionCreators(actionCreators, dispatch),
)
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <Header {...this.props} />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
