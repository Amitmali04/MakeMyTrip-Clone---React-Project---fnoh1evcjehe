import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./Login.css";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();
  console.log(userData);
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const addData = (e) => {
    const { name, value } = e.target;

    setUserData(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    localStorage.setItem("user", JSON.stringify(values));

    if (values) {
      navigate("/");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register">
      <h1 className="hadeing">Registion Form</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="hadeing"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input name="username" onChange={addData} value={userData.username} />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input name="email" onChange={addData} value={userData.email} />
        </Form.Item>
        <Form.Item
          label="mobile"
          name="mobile"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input name="mobile" onChange={addData} value={userData.mobile} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            onChange={addData}
            value={userData.password}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
