import React from 'react';
import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';

const requestConfig = {};
export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp('http://localhost:3000/meals', requestConfig, []);

	console.log(loadedMeals);

	if (isLoading) {
		return <p>Fetching meals...</p>;
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
