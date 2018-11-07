import React, {
  Component
} from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd'

const FormItem = Form.Item

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Admin Template
          </p>
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
          >

            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }],
              })(
                <Input
                  prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'Please input your Password!'
                }],
              })(
                <Input
                  prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>

          </Form>
        </header>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(App);

export default WrappedNormalLoginForm
