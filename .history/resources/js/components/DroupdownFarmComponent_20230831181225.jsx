import React from "react";
import Select from 'react-select'
import {Link, withRouter} from 'react-router-dom';

class DroupdownFarmComponent extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
            options:[],
            loading: false,
            farmid:null,
            farm: null,
           
          };
       
    
      }


      async  componentDidMount (){


     if (this.state.isLoggedIn === true) {
       axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.user.access_token;
      }
      await axios.get('/api/farms')
          .then((response) => {
          
            response.data.data.map(farm => 
              this.state.options.push({value: farm.id, label: farm.name})
            );
            this.setState({loading: true});
          })
          .catch((error) =>{
            console.log(error)
          })
          
      }

      

    

    render() {
      const { animal } = this.state;
        return (
          <>
             { this.state.loading ?
            <Select
                value={this.props.farm.value?this.props.farm:null}
                onChange={this.props.handleChange}
                options={ this.state.options}
                primaryColor={"yellow"}
                placeholder={"Select Farm............."}
                classNames={{
                  placeholder: () => "text-left",
                  menuList: () => "text-left ",
                  singleValue: () => "text-left",
                  
                  
                }}
              
                
               
              
            />
            :
            <h1>Records Not Found</h1>
             }
      </>
        )
    }


}
export default withRouter(DroupdownFarmComponent)
