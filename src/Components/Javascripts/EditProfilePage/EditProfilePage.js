import React from "react";
import '../../Styles/SignupPage/SignupPage.css';
import {Form, Input, Tooltip, Button} from 'antd';
import {QuestionCircleOutlined, TwitterOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export default class EditProfilePage extends React.Component{

    constructor(props) {
        super(props);

    }

    loadFeed = () => {
        this.props.pathSetter("feed")
    }

    onFinish = async (values) => {
        const response = await fetch(`http://localhost:8000/tweeter/user/${this.props.user.username}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newUsername: values.username,
                newName: values.nickname,
                newPassword: values.password})
        });
        if (response.ok){
            console.log("ok");
            const response2 = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${values.username}&password=${values.password}`, {
                method: 'GET',
            });
            if (!response2.ok)
                alert("Incorrect username and password.")
            else{
                const json = await response2.json();
                console.log(json);
                this.props.authorizer({
                    name: json.name,
                    username: json.username,
                    password: values.password,
                    followersUsername: json.followersUsername,
                    followingsUsername: json.followingsUsername,
                    likedTweets: json.likedTweets,
                    tweets: json.tweets,
                    reTweets: json.reTweets,
                    timeline: json.timeline,
                });
            }
        }
        else
            alert("Username is already taken.")

        this.props.pathSetter("feed")
    }

    render() {
        return (
            <div className={"signup-page-container"}>
                <div className={"signup-form-container"}>
                    <TwitterOutlined className="twitter-icon"/>
                    <Form
                        name="register"
                        onFinish={this.onFinish}
                        initialValues={{
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="username"
                            label=" "

                            rules={[
                                {
                                    required: true,
                                    message: 'Pick a new username.',
                                },
                            ]}
                        >
                            <label style={{fontSize: "14px", color:"white"}}>Pick a new username:
                                <Input />
                            </label>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label=" "
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your new password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <label style={{fontSize: "14px", color:"white"}}>Enter your new password:
                                <Input.Password />
                            </label>
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label=" "
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your new password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <label style={{color:"white", fontSize:"14px"}}>
                                Confirm your new password:<Input.Password />
                            </label>

                        </Form.Item>

                        <Form.Item
                            name="nickname"
                            label={" "}
                            rules={[{ required: true, message: 'Please input your new nickname!', whitespace: true }]}
                        >
                            <label style={{color:"white", fontSize:"14px"}}>
                                Enter your new nickname: <Tooltip title="What do you want others to call you?">
                                <QuestionCircleOutlined />
                            </Tooltip>
                                <Input />
                            </label>

                        </Form.Item>
                        <div className={"edit-cancel-container"}>
                            <Form.Item>
                                <Button type="primary" size={"large"} htmlType="submit" shape={"round"} className={"edit-button"}>
                                    Change my info!
                                </Button>

                            </Form.Item>
                            <Button onClick={this.loadFeed} className={"cancel-button"} size={"large"} shape={"round"}>Cancel</Button>
                        </div>
                    </Form>
                </div>

            </div>

        );
    }
}