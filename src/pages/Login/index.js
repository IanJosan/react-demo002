import React, { Component } from 'react'
import { Card, Button, Checkbox, Form, Input } from 'antd'
import './index.scss'
import logo from '../../assets/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
          <Form
            size="large"
            onFinish={this.onFinsh}
            initialValues={{
              mobile: '13911111111',
              code: '246810',
              agree: true,
            }}
          >
            <Form.Item
              name="mobile"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                {
                  required: true,
                  message: '手机号不为空',
                  validateTrigger: 'onBlur',
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '格式错误',
                  validateTrigger: 'onBlur',
                },
              ]}
            >
              <Input placeholder="请输入手机号" autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                { required: true, message: '验证码不为空' },
                {
                  pattern: /^\d{6}$/,
                  message: '格式错误',
                },
              ]}
            >
              <Input placeholder="请输入验证码" autoComplete="off" />
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              name="agree"
              rules={[
                {
                  validator(rule, value) {
                    if (value) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(new Error('请同意协议'))
                    }
                  },
                },
              ]}
            >
              <Checkbox>我阅读并同意</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  onFinsh = (value) => {
    console.log(value)
  }
}
