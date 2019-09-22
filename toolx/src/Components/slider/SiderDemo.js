// include the navigation bar
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './css/SiderDemo.css'
import Request from '../../Request.js'
import WrappedRegistrationForm from '../update_profile/update_profile.js'
import Carder from "../card/card";
import { Layout, Menu, Icon, Button } from 'antd';
import RegistrationForm from '../signup/signup'
import Profile from "../profile/profile";
import { Link } from 'react-router-dom';
import EditProfile from "../update_profile/update_profile";
import { db } from "../../config.js";


const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    db.ref('/data/').on("child_changed", (x) => {
      if (x.val() === "bonafide") {
        this.props.history.push("/Request");
      }
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      card: true,
      request: false,
      certificate: "home"
    }
  }
  nextPath = (path) => {
    this.props.history.push(path);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sider">
          <div className="logo" >
            {/* <img src="../logo.svg"></img> */}



          </div>

          <Menu className="menu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item onClick={() => this.nextPath('/UserProfile')} key="1" className="menu_item">
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => this.nextPath('/EditProfile')} className="menu_item">
              <Icon type="setting" />
              <span>Edit Profile</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => this.nextPath('/UploadCertificate')}>
              <Icon type="upload" />
              <span>Upload Documents</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <p className="title"><span className="devs"> D</span>EVS</p>
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding: 5,
              background: '#fff',
              minHeight: '100vh',
            }}
          >
            <Link to="/Request"> <Carder /></Link>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);
export default SiderDemo;

