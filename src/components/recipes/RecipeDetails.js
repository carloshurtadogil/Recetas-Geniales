import React from 'react'

const RecipeDetails = (props) => {
    const id = props.match.params.id; //ID of recipe

    return (
        <div className='container section recipe-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Recipe Title - {id}</span>

                    <p>Ex aliqua eiusmod dolor enim et voluptate laboris cupidatat anim amet do. Occaecat consectetur est laborum sunt irure duis culpa aliqua occaecat do minim ex fugiat culpa. Officia laboris est anim excepteur. Consectetur quis qui esse quis.</p>
                </div>

                <div className='card-action gret lighten-44 grey-text'>
                    <div>Recipe by John Doe</div>
                    
                    <div>October 10, 2019</div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;