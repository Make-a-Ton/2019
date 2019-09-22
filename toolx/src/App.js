import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/signin";
import SiderDemo from './Components/slider/SiderDemo.js'
import RegistrationForm from './Components/signup/signup'
import SiderDemoDup from "./Components/sliderdup/SliderDemoDup.js";
import Profile from "./Components/profile/profile";
import EditProfile from "./Components/update_profile/update_profile";
import UploadCertificate from "./Components/Upload";
import { db } from "./config.js";

// import Hod from "./Components/Hod/index.js";
// import Principal from "./Components/Principal/index.js";
// import WrappedRegistrationForm from "./Components/update_profile/update_profile.js";
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    db.ref('data').on("value", function (data) {
      console.log("data", data);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Home} />
          <Route path="/Home" component={SiderDemo} />
          <Route path="/Request" component={SiderDemoDup} />
          <Route path="/UserProfile" component={Profile} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/UploadCertificate" component={UploadCertificate} />
          <Route path="/" component={RegistrationForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
