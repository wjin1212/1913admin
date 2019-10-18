import React ,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card,message} from 'antd';

class NormalLoginForm extends React.Component {
  submit=()=>{
      console.log('登录')
    //   let result = this.props.form.getFieldsValue()
    //   console.log(result)
    this.props.form.validateFields((err,data)=>{
        if(err){
            message.error('输入信息有误请重试')
        }else{
            message.success('登录成功，1秒后跳转首页',()=>{
                this.props.history.push('/admin')
            })
        }
        console.log(err,data)
    })
  }
  render() {
    console.log(this)
    let { getFieldDecorator } = this.props.form;
    return (
    <Card style={{width:'400px',position:'fixed',top:'30vh',right:'50px'}}>
      <div onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            {getFieldDecorator('us',{
                rules: [{ required: true, message: 'Please input your username!' },
                        { min: 6, message: '用户名长度为6-9位' },
                        { max: 9, message: '用户名长度为6-9位' }],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator('ps',{
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />
            )}
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" onClick={this.submit} className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </div>
    </Card>
    );
  }
}
export default Form.create()(NormalLoginForm)
