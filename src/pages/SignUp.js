import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class SignUp extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <legend><a href="http://www.jquery2dotnet.com"><i className="glyphicon glyphicon-globe"></i></a> Sign up!</legend>
                        <form action="#" method="post" className="form" role="form">
                            <div className="row">
                                <div className="col-xs-6 col-md-6">
                                    <input className="form-control" name="firstname" placeholder="First Name" type="text" required="" autofocus="" />
                                </div>
                                <div className="col-xs-6 col-md-6">
                                    <input className="form-control" name="lastname" placeholder="Last Name" type="text" required="" />
                                </div>
                            </div>
                            <input className="form-control" name="youremail" placeholder="Your Email" type="email" />
                            <input className="form-control" name="reenteremail" placeholder="Re-enter Email" type="email" />
                            <div className="row">
                                <div className="col-xs-12" id="thepwddiv"></div>
                                <script type="text/javascript">
                                    var pwdwidget = new PasswordWidget('thepwddiv','regpwd');
                                    pwdwidget.MakePWDWidget();
				                </script>
                                <noscript>
                                    &lt;div&gt;&lt;input className="form-control" type='password'  name='regpwd' /&gt;&lt;/div&gt;
				                </noscript>
                            </div>
                            <label for="">
                                Birth Date</label>
                            <div className="row">
                                <div className="col-xs-4 col-md-4">
                                    <select className="form-control">
                                        <option value="Month">Month</option>
                                    </select>
                                </div>
                                <div className="col-xs-4 col-md-4">
                                    <select className="form-control">
                                        <option value="Day">Day</option>
                                    </select>
                                </div>
                                <div className="col-xs-4 col-md-4">
                                    <select className="form-control">
                                        <option value="Year">Year</option>
                                    </select>
                                </div>
                            </div>
                            <label className="radio-inline">
                                <input type="radio" name="sex" id="inlineCheckbox1" value="male" />
                                Male
                            </label>
                            <label className="radio-inline">
                                <input type="radio" name="sex" id="inlineCheckbox2" value="female" />
                                Female
                            </label>
                            <br />
                            <br />
                            <button className="btn btn-lg btn-primary btn-block" type="submit">
                                Sign up</button>
                        </form>
                    </Col>
                </div>
            </div>
        );
    }
}

export default SignUp;