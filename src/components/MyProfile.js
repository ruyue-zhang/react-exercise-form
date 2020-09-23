import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist//css/bootstrap'

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description: "",
    checked: false,
  }

  handleInputChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleCheckedChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };

  hadleForSubmit = (event) => {
    event.preventDefault();
    console.log(
      "name:", this.state.name, 
      "gender:", this.state.gender, 
      "description:", this.state.description,
      "checked:", this.state.checked
    );
  }

  render() {
    return (
      <div className="container">
        <h2>My Profile</h2>
        <form className="profile" onSubmit={this.hadleForSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input 
              type="text" 
              value={this.state.name} 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Your name" 
              onChange={(event) => this.handleInputChange("name", event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Gender</label>
            <select 
              value={this.state.gender} 
              className="form-control" 
              id="exampleFormControlSelect1"
              onChange={(event) => this.handleInputChange("gender", event)}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            <textarea 
              value={this.state.description} 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3" 
              placeholder="Description about yourself"
              onChange={(event) => this.handleInputChange("description", event)}>
            </textarea>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleCheckedChange}/>
            <label className="form-check-label" htmlFor="exampleCheck1">
              I have read the terms of conduct
            </label>
          </div>
          <input 
            id="submit"
            type="submit" 
            value="Submit" 
            className="btn btn-primary"
            disabled={!this.state.name || !this.state.gender || !this.state.description || this.state.checked === false}
          />
        </form>
      </div> 
    );
  }
}

export default MyProfile;


