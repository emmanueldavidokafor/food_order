import React from 'react';
import logo from '../assets/logo.jpg';
export default function Header() {
	return (
		<header id='main-header'>
			<div id='title'>
				<img src={logo} />
				<h1>FOOD ORDER APP</h1>
			</div>
			<nav>
				<button>Cart (0)</button>
			</nav>
		</header>
	);
}
