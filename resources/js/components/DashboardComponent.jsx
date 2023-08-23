import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
class DashboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
// check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      console.log(JSON.stringify(AppState));
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
// 4.1
render() {
    return (
       
      <div>
        <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
        <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        <span>Whatever normally goes into the user dasboard page; the table below for instance</span> <br/>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row ">Full Name</th>
               <td>priyanka</td>
              </tr>
            </tbody>
          </table>
        </main>
         
        <Footer/>
      </div>
     
      )
    }
  }
export default DashboardComponent