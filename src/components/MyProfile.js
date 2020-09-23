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

  render() {
    return (
      <div class="container">
        <h2>My Profile</h2>
        <form className="profile">
          <div class="form-group">
            <label for="exampleFormControlInput1">name</label>
            <input 
              type="text" 
              value={this.state.name} 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Your name" 
              onChange={(event) => this.handleInputChange("name", event)}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            <select 
              value={this.state.gender} 
              class="form-control" 
              id="exampleFormControlSelect1"
              onChange={(event) => this.handleInputChange("gender", event)}
            >
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea 
              value={this.state.description} 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3" 
              placeholder="Description about yourself"
              onChange={(event) => this.handleInputChange("description", event)}>
            </textarea>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={this.handleCheckedChange}/>
            <label class="form-check-label" for="exampleCheck1">
              I have read the terms of conduct
            </label>
          </div>
          <input type="submit" value="Submit" class="btn btn-primary"/>
        </form>
      </div> 
    );
  }
}

export default MyProfile;


