import React, { useState } from 'react';
import {Form,Input,Button} from 'antd';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onSubmit = async (value:any) => {
    const payload = {
      name: value.name,
      email: value.email,
      subject: value.subject,
      message: value.message
    }
    try {
      const res = await fetch("/api/mail", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(payload)
      });
    } catch (error) {
      console.log(error)
    }
  }


    return (
        <div className='border-2 border-green-500 p-3 rounded-lg'>
          <div className='mt-10'>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              autoComplete="off"
              size='large'
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder='Enter your name'/>
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder='Enter your email'/>
              </Form.Item>
              <Form.Item
                name="subject"
                rules={[{ required: true, message: 'Please enter your subject' }]}
              >
                <Input placeholder='Enter your subject'/>
              </Form.Item>
              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your message' }]}
              >
              <TextArea
              //   value={value}
              //   onChange={this.onChange}
                placeholder="Enter your message"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ background: "rgba(16, 185, 129)"}}>
                SEND MAIL
              </Button>
            </Form.Item>
            </Form>
          </div>
        </div>
    )
}

export default ContactForm
