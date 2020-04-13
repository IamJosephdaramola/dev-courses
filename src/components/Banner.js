import React from 'react';

export default function Banner({ children, title, author, rating }) {
	return (
		<div className='banner mt-5'>
			<h1>{title}</h1>
			<div></div>
			{author && <p className='small mb-2'> Author: {author}</p>}
			{rating && <p className='small mb-2'> Ratings: {rating}</p>}

			{children}
		</div>
	);
}
