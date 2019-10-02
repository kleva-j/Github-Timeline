import React from 'react';

export default class LandingPage extends React.Component<any, any> {
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
    const { setUsername } = this.props;
    setUsername(username);
  }
  
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="nameField">
          <h3>Enter Your Github Username:</h3>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>
        <input className="button button-outline" type="submit" value="Submit" />
      </form>
    );
  }
}