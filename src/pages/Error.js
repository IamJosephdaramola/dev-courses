import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import ErrorImg from '../img/showcase.jpg';

const Error = () => {
	return (
		<Fragment>
			<StyledHero minHeight='100vh' img={ErrorImg}>
				<Banner title='Error 404'>
					<h4>Page Not Found</h4>
					<Link to='/' className='btn btn-danger text-white btn-lg'>
						Back to Courses
					</Link>
				</Banner>
			</StyledHero>
		</Fragment>
	);
};

export default Error;
