import React from 'react';
import { connect } from 'react-redux';

class CreateForm extends React.Component {
  state = {name: '', rank: '', charc: '', KD: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props;
    const { name } = this.state;
    const { rank } = this.state;
    const { charc } = this.state;
    const { KD } = this.state;
    dispatch({ type: 'ADD_PROFILE', profile: name, rank, charc, KD})
    this.setState({ name: '', rank: '', charc: '', KD: ''})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
    this.setState({ rank: e.target.value })
    this.setState({ charc: e.target.value })
    this.setState({ KD: e.target.value })
  }

  render() {
  const { name, rank, charc, KD } = this.state;

    return(
      <div>
        <h3>Create Profile</h3>
        <form onSubmit={this.handlesubmit}>
          <input value={name} onChange={this.handleChange}/>
          <input value={rank} onChange={this.handleChange}/>
          <input value={charc} onChange={this.handleChange}/>
          <input value={KD} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default connect()(CreateForm);


