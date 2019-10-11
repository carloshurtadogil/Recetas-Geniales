import React from 'react';
import RecipeSummary from './RecipeSummary';

//Statelist component with list of all recipes created by the current user
const RecipeList = () => {
    return (
        <div className='recipe-list section'>
            <RecipeSummary />

            <RecipeSummary />

            <RecipeSummary />
        </div>
    );
};

export default RecipeList;