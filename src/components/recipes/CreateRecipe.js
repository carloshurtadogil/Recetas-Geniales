import React, { Component } from 'react';

class CreateRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            preptime: 0,
            cooktime: 0,
            totaltime: 0,
            note: '',
            image: '',
    
            email: '',
            password: '',
            sum: 0
        };
    };

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    numericHandler = (e) => {
        const number = e.target.value;
        console.log(e);
        if(Number.isInteger(number) && number >= 0) {//Ensure the input is a valid number
            this.setState({
                [e.target.id]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
            });

            var preptime = this.preptime;
            var cooktime = this.cooktime;
            var sum = preptime + cooktime;
            this.setState({
                totaltime: Number(sum)
            });
            
        } else {
            this.setState({
                [e.target.id]: 0//precaution
            });
        }
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
                    <h3 className='grey-text text-darken-3' style={{paddingBottom: 30}}>Create Recipe</h3>

                    <div className='input-field'>
                        <label htmlFor='name'>Recipe Name</label>

                        <input type='text' id='name' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='description'>Description</label>

                        <textarea id='description' className='materialize-textarea' onChange={ this.changeHandler }></textarea>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='preptime'>Prep Time</label>

                        <input type='number' value={this.state.preptime} min={0} id='preptime' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='cooktime'>Cook Time</label>

                        <input type='number' value={this.state.cooktime} min={0} id='cooktime' onChange={ this.changeHandler }/>
                    </div>

                    <div className='input-field'>
                        <span>
                        <label htmlFor='totaltime'>Total Time</label>

                        <p>{this.state.totaltime}</p>
                        </span>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='note'>Note</label>

                        <textarea id='note' className='materialize-textarea' onChange={ this.changeHandler }></textarea>
                    </div>

                    <div className='input-field'>
                        <button className='btn waves-effect pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default CreateRecipe;