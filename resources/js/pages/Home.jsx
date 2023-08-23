import React, {Component} from 'react';
import DashboardComponent from '../components/DashboardComponent';
import {withRouter} from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
  }
  render() {
    return (
      <div class="pt-12 md:pt-20">
        <DashboardComponent redirect={this.state.redirect}/>
      </div>
    )
  } 
}
export default withRouter(Home)