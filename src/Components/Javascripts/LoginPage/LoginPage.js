import '../../Styles/LoginPage/LoginPage.css'
import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, TwitterOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';


export default class LoginPage extends React.Component{

    constructor(props) {
        super(props);
    }

    onFinish = async (values) => {
        const response = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${values.username}&password=${values.password}`, {
            method: 'GET',
        });
        if (!response.ok)
            alert("Incorrect username and password.")
        else{
            const json = await response.json();
            console.log(json);
            this.props.authorizer({
                name: json.name,
                username: json.username,
                password: values.password,
                followersUsername: json.followersUsername,
                followingsUsername: json.followersUsername,
                likedTweets: json.likedTweets,
                tweets: json.tweets,
                reTweets: json.reTweets,
                timeline: json.timeline,
            });
        }
    };

    render() {
        return (
            <div className="LoginPageContainer">
                <div className="form-container">
                    <TwitterOutlined className="twitter-icon"/>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" shape="round" size="large" className="login-form-button">
                                Log in
                            </Button>
                            <div className="register-container">
                                <Link to="/signup">Don't have an account? Register now!</Link>
                            </div>

                        </Form.Item>
                    </Form>
                </div>

            </div>

        );
    }
}