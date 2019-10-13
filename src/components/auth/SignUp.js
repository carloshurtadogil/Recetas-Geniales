import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
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
                    <h3 className='grey-text text-darken-3' style={{paddingBottom: 30}}>Sign Up</h3>

                    <div className='input-field'>
                        <label htmlFor='firstname'>First Name</label>

                        <input type='text' id='firstname' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='lastname'>Last Name</label>

                        <input type='text' id='lastname' onChange={ this.changeHandler }/>
                    </div>

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

export default SignUp;