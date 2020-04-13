import React from 'react';
import { Link } from 'react-router-dom';
import algoliasearch from 'algoliasearch';
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
				placeholder: 'Type your course title, author, category,etc... '
			}}
		/>
	</header>
);

const Hit = ({ hit }) => (
	<div>
		<div className='card mt-2' style={{ width: '18rem' }}>
			<div className='card-image mb-1'>
				<img src={hit.imgUrl} alt={hit.category} className='img-fluid' />
			</div>
			<div className='card-contents card-body'>
				<Highlight attribute='title' hit={hit} className='card-title' />
				<p className='mb-1'>
					Author: <Highlight attribute='author' hit={hit} className='card-author' />
				</p>

				<div className='card-category mb-3'>
					Category: <span>{hit.category}</span>
				</div>
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
					items={[{ value: 'dev_courses', label: 'Most Relevant' }]}
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
