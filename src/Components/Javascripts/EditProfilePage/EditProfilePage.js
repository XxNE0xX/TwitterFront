import React from "react";
import '../../Styles/SignupPage/SignupPage.css';
import {Form, Input, Tooltip, Button} from 'antd';
import {QuestionCircleOutlined, TwitterOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export default class EditProfilePage extends React.Component{

    constructor(props) {
        super(props);

    }

    onFinish = async (values) => {}
    //     const response = await fetch(`http://localhost:8000/tweeter/user`, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name: values.nickname, username: values.username, password: values.password})
    //     });
    //     if (response.ok){
    //         console.log("ok");
    //         this.props.authorizer({name: values.nickname, username: values.username});
    //     }
    //     else
    //         alert("Username is already taken.")
    // }

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

                        <Form.Item>
                            <Button type="primary" size={"large"} htmlType="submit" shape={"round"} className={"register-button"}>
                                Change my info!
                            </Button>
                            <div className="register-container">
                            </div>
                        </Form.Item>
                    </Form>
                </div>

            </div>

        );
    }
}