import React, {Component, useState, useEffect } from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import axios from 'axios';
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: '',
      formSubmitting: false,
      user: {
        token: '',
        name: '',
        email:'',
        password:''

      },
      token:'',
      name:'',
      redirect: props.redirect,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState,token:AppState.token,name:AppState.name});
    }
    
  }
  componentDidMount() {
    const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' } };
    if (prevLocation && this.state.isLoggedIn) {
      
      return this.props.history.push(prevLocation);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({formSubmitting: true});
    let userData = this.state.user;
    axios.post("/api/login",userData)
    .then(response => {
      if (response.data.success) {
         let userData = {
         
           name: response.data.data.name,
           access_token: response.data.data.token,
         };
         let appState = {
          token: response.data.data.token,
          name: response.data.data.name,
           isLoggedIn: true,
           user: userData,

         };
         localStorage["appState"] = JSON.stringify(appState);
         this.setState({
            isLoggedIn: appState.isLoggedIn,
            user: appState.user,
            token: appState.token,
            name: appState.name,
            error: ''
         });
         location.reload()
       }
       else {
          alert(`Our System Failed To Register Your Account!`);
       }
    })
    .catch(error => {if (error.response) {
       
        let err = error.response.data;
        this.setState({
          error: err.message,
          errorMessage: err.errors,
          formSubmitting: false
        })
      }
      else if (error.request) {
        
        let err = error.request;
        this.setState({
          error: err,
          formSubmitting: false
        })
     } else {
       
       let err = error.message;
       this.setState({
         error: err,
         formSubmitting: false
       })
   }
 }).finally(this.setState({error: ''}));
}
handleEmail(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, email: value
    }
  }));
}
handlePassword(e) {
  let value = e.target.value;
  this.setState(prevState => ({
    user: {
      ...prevState.user, password: value
    }
  }));
}
render() {
  const { state = {} } = this.state.redirect;
  const { error } = state;
  return (
<>
         

  <header className="max-w-lg mx-auto">
                    <h1 className="text-4xl font-bold text-gray-600  text-center">
                         Turbine Inspections Login
                    </h1>
         </header>
    
                <main className="bg-black max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                        <h3 className="font-bold text-2xl">Welcome</h3>
                        <p className="text-gray-500 pt-2">
                            Sign in to your account.
                        </p>
                    </section>
    
                    <section className="mt-10">
        
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            
          {this.state.isLoggedIn ? <FlashMessage duration={1000} persistOnHover={true}>
          <h5 className={"alert alert-success  text-red-700"}>Login successful, redirecting...</h5></FlashMessage> : ''}
          {this.state.error ? <FlashMessage duration={1000} persistOnHover={true}>
          <h5 className={"alert alert-danger text-red-700"}>Please enter a valid email address and password</h5></FlashMessage> : ''}
          {error && !this.state.isLoggedIn ? <FlashMessage duration={1000} persistOnHover={true}>
          <h5 className={"alert alert-danger text-red-700"}>Error1111: {error}</h5></FlashMessage> : ''}

          <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="E-mail"
                                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                    required onChange={this.handleEmail}
                                />
                            </div>


                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    class="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password" placeholder="Password"
                                    required onChange={this.handlePassword}
                                    class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                />
                            </div>
                            <button
                            disabled={this.state.formSubmitting}
                            name="singlebutton"
                                class="bg-yellow-400 hover:bg-yellow-300 text-black-100 font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit"
                            >
                               {this.state.formSubmitting ? "Logging You In..." : "Log In"} 
                            </button>
            
          </form>

          </section>
                </main>
    
                <footer class="max-w-lg mx-auto flex justify-center text-white">
                    
                    <span className="mx-3">•</span>
                   
                </footer>
           

</>

        
    )
  }
}
export default withRouter(LoginContainer);