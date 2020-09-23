import React, {Component} from 'react';
import './myProfile.less';
import 'bootstrap/dist//css/bootstrap'

class MyProfile extends Component {
  render() {
    return (
      <div class="container">
        <h2>My Profile</h2>
        <form className="profile">
          <div class="form-group">
            <label for="exampleFormControlInput1">name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Gender</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description about yourself"></textarea>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">I have read the terms of conduct</label>
          </div>
          <input type="submit" value="Submit" class="btn btn-primary"/>
        </form>
      </div> 
    );
  }
}

export default MyProfile;


