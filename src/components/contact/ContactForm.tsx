import React from 'react';
import {Form,Input,Button} from 'antd';

const { TextArea } = Input;

const ContactForm = () => {
    return (
        <div className='border-2 border-green-500 p-3'>
          <p>Touch Me</p>
            <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    //   onFinish={onFinish}
    //   onFinishFailed={onFinishFailed}
      autoComplete="off"
      size='large'
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Enter your name'/>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Enter your email'/>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder='Enter your subject'/>
      </Form.Item>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <TextArea
        //   value={value}
        //   onChange={this.onChange}
          placeholder="Enter your message"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          SEND MAIL
        </Button>
      </Form.Item>
      </Form>

        </div>
    )
}

export default ContactForm
