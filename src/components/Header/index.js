import React, { Component } from 'react';
import { Link } from 'react-router';

/* helpers */
// import { redirectTo } from '../../utils/helpers';

/* component styles */
import { styles } from './styles.scss';

export class Header extends Component {
  static propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
    logout: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <header className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
              <Link to="/">
                Redux Easy Boilerplate
              </Link>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <nav>
                <Link to="/home" activeClassName="active">
                  Home
                </Link>
                <Link to="/list" activeClassName="active">
                  Redux
                </Link>
                <Link to="/login" activeClassName="active"
                  className={this.props.loggedIn ? 'hidden' : ''}
                >
                  Login
                </Link>
                <Link to="/login" activeClassName="active"
                  className={this.props.loggedIn ? '' : 'hidden'}
                  onClick={this.props.logout}
                >
                  Logout
                </Link>
              </nav>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right">
              <a href="git@github.com:tayyabshabab/redux-easy-boilerplate.git">
                Fork me on GitHub
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
