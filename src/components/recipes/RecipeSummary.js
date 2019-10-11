import React from 'react';

const RecipeSummary = () => {
    return (
        <div className='card z-depth-0 recipe-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>Recipe Title</span>
                <p>Posted by John Doe</p>
                <p className='grey-text'>October 11, 2019</p>
            </div>
        </div>
    );
};

export default RecipeSummary;