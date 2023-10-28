import React from "react";


export default class Login extends React.Component {
    render() {
        return (
            <div className="loginSection">
            <h3 className="loginBox">Login Form</h3>
            <form className="formContainer">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="userName" className="form-control" id="exampleInputUserName" placeholder="User Name" />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        );
    }
}

