import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./Login.css";
const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);

    if (values.email) {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/");
    } else {
      alert("Please Enter detaile");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const loginData = (e) => {
    const { name, value } = e.target;

    setUserData(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  return (
    <div className="login">
      <h1 className="hadeing">Login Page</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input name="email" onChange={loginData} value={userData.email} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            onChange={loginData}
            value={userData.password}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
