import React from "react";
import Select from "react-tailwindcss-select";
import {Link, withRouter} from 'react-router-dom';
import Modal from './MapComponent';

class InspectionListViewComponent extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
            options:[],
            loading: false,
            farmid:null,
            animal: null ,
            showModal: false,
            showModalid: '',
           
          };
         
          this.setShowModal = this.setShowModal.bind(this)
      }

      setShowModal(value,id){
       
        this.setState({showModal: value});
        this.setState({showModalid: id});

      }

      async   componentDidMount (){
        if (this.state.isLoggedIn === true) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.user.access_token;
         }
         let userData ={id:this.props.farmid.value};
         await axios.post("/api/insp",userData)
             .then((response) => {
                console.log(JSON.stringify(response.data.data));
                console.log(JSON.stringify('testing'));
               response.data.data.map(insp => 
                 this.state.options.push({insid:insp.insid,id:insp.id,turbine: insp.turbine, component: insp.component ,gradevalue:insp.gradevalue,inspected_at:insp.gradevalue,lat:insp.lat,long:insp.long})
               );

               this.state.options.map(ins => 
                ins.id
               );

               this.setState({loading: true});
             })
             .catch((error) =>{
               console.log(error)
             })
             
         }
       
         async  shouldComponentUpdate(nextProps, nextState) {

            if (nextProps.farmid.value !== this.props.farmid.value) {
            if (this.state.isLoggedIn === true) {
              axios.defaults.headers.common["Authorization"] = "Bearer " + this.state.user.access_token;
             }
             let userData ={id:nextProps.farmid.value};
             await axios.post("/api/insp",userData)
                 .then((response) => {
                    nextState.options=[];
                   response.data.data.map(insp => 
                    nextState.options.push({insid:insp.insid,id:insp.id,turbine: insp.turbine, component: insp.component ,gradevalue:insp.gradevalue,inspected_at:insp.inspected_at,grade:insp.grade,lat:insp.lat,long:insp.long})
                   );
                   this.setState({loading: true});
                 })
                 .catch((error) =>{
                   console.log(error)
                 })

                return true;
              } else {
                return false;
              }

            
         }


      render() {
    
          return (

<div class="relative w-full"  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative mt-6  ">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400 " >
            <tr>
                <th scope="col" class="px-6 py-3 bg-yellow-500 dark:bg-yellow-800">
                Turbine name 
                </th>
                <th scope="col" class="px-6 py-3 bg-yellow-200">
                Component/Part
                </th>
                <th scope="col" class="px-6 py-3 bg-yellow-500 dark:bg-yellow-800">
                Grade
                </th>
                <th scope="col" class="px-6 py-3 bg-yellow-200">
                Inspected Date
                </th>
                <th scope="col" class="px-6 py-3 bg-yellow-500 dark:bg-yellow-800">
                Show
                </th>
            </tr>
        </thead>
        <tbody>
      { 
  
      this.state.loading?
      this.state.options.map((ins) => (
      
            <tr class="border-b border-gray-200 dark:border-gray-700" key= {ins.insid}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-yellow-800">
                {ins.turbine} 
                </th>
                <td class="px-6 py-4 bg-yellow-400 text-gray-900">
                {ins.component}
                </td>
               {ins.gradevalue==5?
                <td class="px-6 py-4 bg-red-400 dark:bg-yellow-800 text-gray-900">
                {ins.gradevalue}    ({ins.grade})
                </td>
                :
                <td class="px-6 py-4 bg-yellow-50 dark:bg-yellow-800 text-gray-900">
                {ins.gradevalue}
                </td>
                 }
                <td class="px-6 py-4 bg-yellow-400 text-gray-900">
                {ins.inspected_at}
                </td>
                <td class="px-6 py-4 bg-yellow-50 dark:bg-yellow-800 text-gray-900">
                <Modal key= {ins.insid} keyid= {ins.insid} showModal={this.state.showModal} setShowModal={this.setShowModal.bind(this)} showModalid={this.state.showModalid} lat={ins.lat} long={ins.long}/>
                </td>
            </tr>
           
        )  )
              :""
      }
           
        </tbody>
    </table>
    </div>
      )}
    }
    export default withRouter(InspectionListViewComponent)