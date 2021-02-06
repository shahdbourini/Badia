import React from 'react';
import './style-form.css';
import { Row, Col, Form, Input, Button, Cascader, Select } from 'antd';
import contact from '../../images/contact.png';

function Forms(props) {
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const { Option } = Select;
  const residences = [
    {
      value: 'topic1',
      label: 'topic1',
    },
    {
      value: 'topic2',
      label: 'topic2',
    },
  ];
  return (
    <div className="back-color">
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 11, offset: 1 }}
          md={{ span: 11, offset: 1 }}
          lg={{ span: 11, offset: 2 }}
        >
          <Form form={form} layout="vertical" style={{ width: `100%` }}>
            <Row style={{ marginTop: '83px', width: `100%` }}>
              <Col
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 10, offset: 1 }}
                md={{ span: 10, offset: 2 }}
                lg={{ span: 10, offset: 2 }}
              >
                <Form.Item label="First name">
                  <Input
                    style={{ paddingTop: `12px`, paddingBottom: `12px` }}
                  />
                </Form.Item>
              </Col>
              <Col
                xs={{ span: 11, offset: 0 }}
                sm={{ span: 10, offset: 0 }}
                md={{ span: 10, offset: 0 }}
                lg={{ span: 10, offset: 0 }}
                style={{
                  marginLeft: ` 1%`,
                }}
              >
                <Form.Item label="Last name">
                  <Input
                    style={{
                      paddingTop: `12px`,
                      paddingBottom: `12px`,
                      marginLeft: ` 1%`,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ width: `100%` }}>
              <Col
                xs={{ span: 24, offset: 1 }}
                sm={{ span: 20, offset: 1 }}
                md={{ span: 22, offset: 2 }}
                lg={{ span: 22, offset: 2 }}
              >
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      // required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input
                    style={{
                      paddingTop: `12px`,
                      paddingBottom: `12px`,
                      width: `92%`,
                      background: `black`,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ width: `100%` }}>
              <Col
                xs={{ span: 24, offset: 1 }}
                sm={{ span: 20, offset: 1 }}
                md={{ span: 22, offset: 2 }}
                lg={{ span: 22, offset: 2 }}
              >
                <Form.Item
                  name="Topic"
                  label="Topic"
                  rules={[
                    {
                      type: 'array',
                      // required: true,
                      message: 'Please select the Topic',
                    },
                  ]}
                >
                  <Cascader
                    options={residences}
                    style={{
                      width: `92%`,
                      background: `black`,
                      color: 'white',
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ width: `100%` }}>
              <Col
                xs={{ span: 24, offset: 1 }}
                sm={{ span: 20, offset: 1 }}
                md={{ span: 22, offset: 2 }}
                lg={{ span: 22, offset: 2 }}
              >
                <Form.Item name="Message" label="Message">
                  <TextArea
                    rows={4}
                    style={{
                      width: `92%`,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ width: `100%` }}>
              <Col
                xs={{ span: 23, offset: 1 }}
                sm={{ span: 20, offset: 1 }}
                md={{ span: 22, offset: 2 }}
                lg={{ span: 22, offset: 2 }}
              >
                <Form.Item>
                  <Button
                    rows={4}
                    style={{
                      width: `92%`,
                      height: `50px`,
                      color: `white`,
                      background: `#94c529`,
                      borderColor: `#94c529`,
                    }}
                  >
                    SUBMIT
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
        >
          <div className="contact">
            <h1>
              LET’S WORK <bold style={{ color: '#94C529' }}>TOGETHER</bold>
            </h1>
          </div>
          <img src={contact} alt="img" className="img-contact" />
        </Col>
      </Row>
    </div>
  );
}

export default Forms;
