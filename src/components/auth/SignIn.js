import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    submitHandler = (e) => {
        e.preventDefault(); //prevents the default action of the form being submitted and the page being refreshed 
        console.log(this.state);
    };

    render() {
        return (
            <div className='container'>
                <form 
                    action='' 
                    className='white'
                    onSubmit={ this.submitHandler }
                >
                    <h3 className='grey-text text-darken-3' style={{paddingBottom: 30}}>Sign In</h3>

                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>

                        <input type='email' id='email' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>

                        <input type='password' id='password' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Login</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default SignIn;