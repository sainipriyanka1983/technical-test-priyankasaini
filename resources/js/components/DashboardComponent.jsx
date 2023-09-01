import React, {Component} from 'react'
import Header from './Header';
import DroupdownFarmComponent from './DroupdownFarmComponent';
import InspectionListViewComponent from './InspectionListViewComponent';
import Footer from './Footer';


class DashboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {},
      farm: {value:null}
      
    }
  }

  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
 


    handleChange=async(value) =>{
    await this.setState({ farm: value });
   
  }
    

render() {
 
    return (
       
      <div class="h-screen">
        <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
        
        <div class="md:container  m-auto bg-gray-800 rounded-lg 
                    shadow-lg text-center  py-20   inline-block" >
        
        <div class="content-center w-78 pr-80 pl-80  m-auto" >
      <DroupdownFarmComponent userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} handleChange={ this.handleChange} farm={this.state.farm}/>
      </div>
      <div class="content-center inline-block w-4/5 " >
      <InspectionListViewComponent farmid={this.state.farm} userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn} />
   
      </div>

     
           
</div>
       
         
        <Footer/>
      </div>
     
      )
    }
  }
export default DashboardComponent