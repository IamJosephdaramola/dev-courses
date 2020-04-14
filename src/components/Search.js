import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../img/showcase.jpg';
import algoliasearch from 'algoliasearch/lite';
import {
	InstantSearch,
	SearchBox,
	Hits,
	Highlight,
	Stats,
	SortBy,
	Pagination
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
	process.env.REACT_APP_AGOLIA_APP_ID,
	process.env.REACT_APP_AGOLIA_API
);

const Search = () => {
	return (
		<InstantSearch searchClient={searchClient} indexName='dev_courses'>
			<Header />
			<div className='body-content'>
				<Content />
			</div>
		</InstantSearch>
	);
};

const Header = () => (
	<header className='header'>
		<SearchBox
			className='search-bar'
			translations={{
				submitTitle: 'Submit',
				placeholder: 'Type your course title, author, category,etc... '
			}}
			showLoadingIndicator
		/>
	</header>
);

const Hit = ({ hit }) => (
	<div>
		<div className='card mt-2'>
			<div className='card-image mb-1'>
				<img
					src={hit.imgUrl ? hit.imgUrl : defaultImg}
					alt={hit.category}
					className='img-fluid'
				/>
			</div>
			<div className='card-contents card-body'>
				<Highlight attribute='title' hit={hit} className='card-title' />
			</div>
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>
					Author: <Highlight attribute='author' hit={hit} className='card-author' />
				</li>
				<li className='list-group-item card-category'>
					Category: <span>{hit.category}</span>
				</li>
				{hit.providerRatings && (
					<li className='list-group-item'>Ratings: {hit.providerRatings}</li>
				)}
				{hit.duration && hit.durationPeriod ? (
					<li className='list-group-item'>
						Duration: {hit.duration}
						{hit.durationPeriod}
					</li>
				) : (
					<li className='list-group-item'>Duration: Unavailable</li>
				)}
			</ul>
			<div className='card=body my-2'>
				<Link
					className='btn btn-danger btn-block text-white'
					to={`/${hit.courseId}`}>
					More Details
				</Link>
			</div>
		</div>
	</div>
);

const Content = () => (
	<main>
		<div className='information'>
			<div className='stats'>
				{' '}
				<Stats />{' '}
			</div>
			<div>
				<SortBy
					defaultRefinement='dev_courses'
					items={[
						{ label: 'Available Courses', value: 'dev_courses' },
						{ label: 'Rating', value: 'dev_courses_rating' },
						{ label: 'Duration', value: 'dev_courses_duration' }
					]}
				/>
			</div>
		</div>
		<Hits hitComponent={Hit} />
		<div>
			{' '}
			<Pagination />
		</div>
	</main>
);

export default Search;
