import React from "react";
import "./signup.css";
import signupback from "../asset/Zig-Zag.svg" ;
import {Link} from "react-router-dom";

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Card
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  const course = [
    {
      value: 'CUSAT',
      label: 'CUSAT',
      children: [
        {
          value: 'SOE',
          label: 'SOE',
          children: [
            {
              value: 'IT',
              label: 'IT',
            },
            {
              value: 'CS',
              label: 'CS',
            },
          ],
        },
        {
          value: 'SLS',
          label: 'SLS',
          children: [
            {
              value: 'BBA',
              label: 'BBA',
            },
            {
              value: 'LLB',
              label: 'LLB',
            },
            {
              value: 'LLM',
              label: 'LLM',
            },
          ],

        },
        {
          value: 'SMS',
          label: 'SMS',
          children: [
            {
              value: 'MBA IB',
              label: 'MBA IB',
            },
            {
              value: 'MBA TT',
              label: 'MBA TT',
            },
           
          ],

        }
        
      ],
    },
   
    
  ];
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {

      var styleb={
        backgroundImage:`url(${signupback})`
    }
    
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="91">+91</Option>
          <Option value="87">+87</Option>
        </Select>,
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        <div  className="signupDiv" style={{ styleb }}>
        <h3>Sign Up</h3>
        <Card className="signupCard">
        
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                DOB&nbsp;
                <Tooltip title="What was your first cry?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('DOB', {
              rules: [{ required: true, message: 'Please input your DOB!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Course">
            {getFieldDecorator('residence', {
              initialValue: ['CUSAT', 'SOE', 'IT'],
              rules: [
                { type: 'array', required: true, message: 'Please select your Course!' },
              ],
            })(<Cascader options={course} />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
          </Form.Item>
          <Form.Item label="Register-No">
            {getFieldDecorator('Regno', {
              rules: [{ required: true, message: 'Please input Register Number!' }],
            })(
              <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="Register Number"
              >
                <Input />
              </AutoComplete>,
            )}
          </Form.Item>
          <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
           <Link to="/Login"> <Button type="primary" htmlType="submit">
              Register
            </Button></Link>
          </Form.Item>
        </Form>
        </Card>
        </div>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
 export default WrappedRegistrationForm;