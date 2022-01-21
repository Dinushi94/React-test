import React from 'react';
import {Form,Input,Button} from "antd";

export default function login() {
  return(
    <div>
    <Form labelCol={{span:10}} wrapperCol={{span:14}}>
    <Form.Item name="fulName" rules={[{required: true,},]}>
            <Input placeholder='Username/Email'/>
        </Form.Item>
    
        <Form.Item name="Password" rules={[{required: true,message: 'Please input your password!',},]}>
        <Input.Password placeholder='password'/>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8,span: 16,}}>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>

</div>

  )
 
}
