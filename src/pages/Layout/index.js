import React, { Component } from 'react'
import { Button, Space } from 'antd'
export default class Layout extends Component {
  render() {
    return (
      <div>
        首页布局组件
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
      </div>
    )
  }
}
