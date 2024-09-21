import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MealItem from './MealItem';

export default function Meals() {
	const [loadedMeals, setLoadedMeals] = useState([]);

	useEffect(() => {
		async function fetchMeals() {
			const response = await fetch('http://localhost:3000/meals');

			if (!response.ok) {
				//....
			}

			const meals = await response.json();
			console.log(meals);
			setLoadedMeals(meals);
		}
		fetchMeals();
	}, []);

	return (
		<ul id='meals'>
			{loadedMeals.map((meal) => {
				return <MealItem key={meal.id} meal={meal} name={meal.name} />;
				//<li key={meal.id}>{meal.name}</li>;
			})}
		</ul>
	);
}
