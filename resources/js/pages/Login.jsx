import React, {Component} from 'react';
import LoginContainer from '../components/LoginComponent';
import {withRouter} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
  }
  render() {
    return (
      <div  className="pt-12 md:pt-20">
        <LoginContainer redirect={this.state.redirect} />
      </div>
    )
  } 
}
export default withRouter(Login)