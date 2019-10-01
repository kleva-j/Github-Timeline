import React from 'react';
import { User } from './Services/Auth/https/https';
import './App.css';

export default class Hello extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event:any) : void {
    this.setState({ username: event.target.value });
  }

  public handleSubmit(event:any) : void {
    event.preventDefault();
    const { username } = this.state;
    User.getUser(username)
      .subscribe(console.log);
  }
  
  public render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Github Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}