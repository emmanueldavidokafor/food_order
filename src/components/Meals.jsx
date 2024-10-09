import React from 'react';
import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';
import Error from './Error';

const requestConfig = {};
export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	console.log(loadedMeals);

	if (isLoading) {
		return <p className='center'>Fetching meals...</p>;
	}

	if (error) {
		return <Error title='Failed to fetch meals' message={error} />;
	}

	return (
		<ul id='meals'>
			{loadedMeals.map((meal) => {
				return <MealItem key={meal.id} meal={meal} name={meal.name} />;
				//<li key={meal.id}>{meal.name}</li>;
			})}
		</ul>
	);
}
