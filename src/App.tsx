import React from 'react';
import LandingPage from './components/landingpage';
import CodeChart from './components/codechart';
import { User } from './Services/Auth/https/https';
import { tap } from 'rxjs/operators';
import './App.css';
import spinner from './spinner.svg'

export default class Hello extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: null,
      userData: {},
      loading: false
    };

    this.setUsername = this.setUsername.bind(this);
    this.fetchUserDetails = this.fetchUserDetails.bind(this);
  }
  
  setUsername(username:string) {
    this.setState({ username, loading: true });
    this.fetchUserDetails(username);
  }

  fetchUserDetails(username:string) {
    User.getUser(username)
      .pipe(tap(() => this.setState({ loading: false })))
      .subscribe(
        (result:any) => this.setState({ userData: result }),
        (error:any) => console.log(error)
      );
  }

  public render() {
    const { username, userData, loading } = this.state;
    return (
      <div className="App-header">
        {
          !username ?
          <LandingPage setUsername={this.setUsername} /> :
          (
            !loading ?
            <CodeChart userdata={userData} /> :
            <div>
              <h4>Please wait!!</h4>
              <img src={spinner} height='50px' alt='spinner' />
            </div>
          )
        }
      </div>
    );
  }
}
