import React from 'react';
import { connect } from 'reacr-redux';

class CreateForm extends React.Component {
  state = {name: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props;
    const { name } = this.state;
    dispatch({ type: 'ADD_PROFILE', profile: name })
    this.setState({ name: ''})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
  const { name } = this.state;

    return(
      <div>
        <h3>Create Profile</h3>
        <form onSubmit={this.handlesubmit}>
          <input value={name} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default CreateForm;


