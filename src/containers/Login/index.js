import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/auth';

/* helpers */
import { redirectTo } from '../../utils/helpers';

/* bootstrap */
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
} from 'react-bootstrap';

const metaData = {
  title: 'Login',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.auth,
  dispatch => bindActionCreators(actionCreators, dispatch),
)
export class Login extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    fields: React.PropTypes.object.isRequired,
    loggedIn: React.PropTypes.bool.isRequired,
    login: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onLogin = (event) => {
    if (this.props.fields.username.value) {
      /* login */
      this.props.login(this.props.fields);

      /* reset form */
      this.props.dispatch(reset('loginForm'));
    }
    event.preventDefault();
    redirectTo('/');
  };

  render() {
    const {
      fields: { username, password },
    } = this.props;

    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-sm-offset-2 col-md-offset-2 col-lg-offset-2"
            >
              <h1>
                Login
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <Form horizontal onSubmit={this.onLogin} >
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Username
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Username" {...username} />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" {...password} />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <i>* Just press the Sign in button and it will work</i>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login = reduxForm({
  form: 'loginForm',
  fields: ['username', 'password'],
  destroyOnUnmount: false,
})(Login);

export default Login;
