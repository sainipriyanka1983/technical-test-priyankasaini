import React, {Component,input,button} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
          this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
          };
    
      }

        logout = () => {
        let appState = {
          isLoggedIn: false,
          user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push('/');
      }
    
      render() {
        const aStyle = {
          cursor: 'pointer'
        };
        
        return (
     <>
 <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a class="flex items-center">
      <img src="https://thecyberhawk.com/wp-content/uploads/2023/01/header-logo.svg" class="h-8 mr-3" alt="Flowbite Logo"/>
  </a>
  <div class="flex md:order-2">
      <button class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-600" type="submit" onClick={this.logout}>Logout</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-yellow-500 rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500" aria-current="page">Home 1</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home 2</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home 3</a>
      </li>
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home 4</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</>
        )
      }
    }
    export default withRouter(Header)
