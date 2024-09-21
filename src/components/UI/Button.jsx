import React from 'react';

export default function Button({ children, textOnly, classname, ...props }) {
	let cssClasses = textOnly ? 'text-button' : 'button';
	cssClasses += ' ' + classname;

	return (
		<button className={cssClasses} {...props}>
			{children}
		</button>
	);
}
