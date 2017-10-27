import React from 'react';

import './list.css';
import Card from './card';

export default function Lists() {
	return (
		<div className='lists'>
			<h3>Example List</h3>
			<Card />
			<Card />
			<Card />
		</div>
		)
}