import React, { Fragment } from 'react';
import Hero from '../components/Hero';
import Title from '../components/Title';
import Search from '../components/Search';
const Courses = () => {
	return (
		<Fragment>
			<Hero>
				<div className='jumbotron jumbotron-fluid'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 mx-auto'>
								<h1 className=''>Grow your skills. Boost your career.</h1>
								<p className='lead'>
									Our mind-blowing learning experience makes it easier than ever to grow
									your coding skills. So pick a course, start learning, and give your
									career the boost it deserves
								</p>
							</div>
						</div>
					</div>
				</div>
			</Hero>
			<section className='container my-3'>
				<Title title='available courses' />
				<Search />
			</section>
		</Fragment>
	);
};

export default Courses;
