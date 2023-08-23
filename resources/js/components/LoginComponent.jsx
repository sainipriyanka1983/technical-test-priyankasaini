import React, {Component} from 'react';
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
        email: '',
        password: '',
      },
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
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState});
    }
  }
  componentDidMount() {
    console.log('hiiiii');
    const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' } };
    console.log('hiiiii');
    if (prevLocation && this.state.isLoggedIn) {
      
      return this.props.history.push(prevLocation);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({formSubmitting: true});
    let userData = this.state.user;
    console.log(JSON.stringify(userData));
    axios.post("/api/login",userData).then(response => {
      return response;
    }).then(json => {
         if (json.data.success) {
           let userData = {
             name: json.data.name,
             access_token: json.data.token,
           };
           let appState = {
             isLoggedIn: true,
             user: userData
           };
           localStorage["appState"] = JSON.stringify(appState);
           this.setState({
              isLoggedIn: appState.isLoggedIn,
              user: appState.user,
              error: ''
           });
           location.reload()
         }
         else {
            alert(`Our System Failed To Register Your Account!`);
         }
    }).catch(error => {if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        let err = error.response.data;
        this.setState({
          error: err.message,
          errorMessage: err.errors,
          formSubmitting: false
        })
      }
      else if (error.request) {
        // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        let err = error.request;
        this.setState({
          error: err,
          formSubmitting: false
        })
     } else {
       // Something happened in setting up the request that triggered an Error
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
          {this.state.isLoggedIn ? <FlashMessage duration={600} persistOnHover={true}>
          <h5 className={"alert alert-success"}>Login successful, redirecting...</h5></FlashMessage> : ''}
          {this.state.error ? <FlashMessage duration={600} persistOnHover={true}>
          <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5></FlashMessage> : ''}
          {error && !this.state.isLoggedIn ? <FlashMessage duration={600} persistOnHover={true}>
          <h5 className={"alert alert-danger"}>Error: {error}</h5></FlashMessage> : ''}

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
            
          <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="E-mail"
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                    required onChange={this.handleEmail}
                                />
                            </div>


                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password" placeholder="Password"
                                    required onChange={this.handlePassword}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-yellow-400 transition duration-500 px-3 pb-3"
                                />
                            </div>
                            <button
                            disabled={this.state.formSubmitting}
                            name="singlebutton"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black-100 font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                                type="submit"
                            >
                               {this.state.formSubmitting ? "Logging You In..." : "Log In"} 
                            </button>
            
          </form>

          </section>
                </main>
    
                <footer className="max-w-lg mx-auto flex justify-center text-white">
                    
                    <span className="mx-3">•</span>
                   
                </footer>
           

</>

        
    )
  }
}
export default withRouter(LoginContainer);