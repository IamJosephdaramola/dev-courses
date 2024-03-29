import React from 'react';
import { FaStar } from 'react-icons/fa';
export default function Banner({ children, title, author, rating }) {
	return (
		<div className='banner mt-5'>
			<h1>{title}</h1>
			<div></div>
			{author && <p className='small mb-2'> Author: {author}</p>}
			{rating && (
				<p className='small mb-2'>
					{' '}
					Ratings: {rating}{' '}
					<span className='rating-icon'>
						<FaStar />
					</span>
				</p>
			)}

			{children}
		</div>
	);
}
