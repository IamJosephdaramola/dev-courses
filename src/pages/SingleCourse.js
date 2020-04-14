import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../img/two-women-who-code.jpg';
import { CourseContext } from '../context';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import Title from '../components/Title';
import Error from './Error';

class SingleCourse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courseId: this.props.match.params.courseId,
			defaultBcg
		};
	}
	static contextType = CourseContext;
	render() {
		const { getCourse } = this.context;
		const course = getCourse(this.state.courseId);

		if (!course) {
			return <Error />;
		}

		const {
			imgUrl,
			title,
			shortDescription,
			url,
			providerRatings,
			duration,
			durationPeriod,
			provider,
			author,
			level,
			medium,
			language,
			category,
			quzeCategory,
			programType,
			tags,
			quzeTags
		} = course;

		return (
			<Fragment>
				<StyledHero img={imgUrl || this.state.defaultBcg}>
					<Banner title={title} author={author} rating={providerRatings}>
						<div className='row'>
							<div className='col-md-6 mb-2'>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href={url}
									className='btn btn-danger btn-lg'>
									Start course
								</a>
							</div>
							<div className='col-md-6'>
								<Link to='/' className='btn btn-light btn-lg text-dark'>
									Back to Courses
								</Link>
							</div>
						</div>
					</Banner>
				</StyledHero>
				<section className='single-course container'>
					<Title title='Course Breakdown' />
					<div className='single-course-info'>
						<article className='desc'>
							<h3 className='font-weight-bold'>Details</h3>
							<p>{shortDescription}</p>
						</article>
						<article className='info'>
							<h3 className='font-weight-bold'>Info</h3>
							{level && <p className=''>Level: {level} </p>}
							{medium && <p className=''>Medium: {medium} </p>}
							{duration && durationPeriod ? (
								<p className=''>
									Course Duration: {duration}
									{durationPeriod}{' '}
								</p>
							) : (
								<p className=''>Course Duration: Unavailable</p>
							)}
							{programType && <p className=''>Program Type: {programType} </p>}
							{language && <p className=''>Language: {language} </p>}
							{provider && <p className=''>Provider: {provider} </p>}
							{category && <p className=''>Category: {category} </p>}
							{quzeCategory && <p className=''>Quze Category: {quzeCategory} </p>}
						</article>
					</div>
				</section>
				<section className='courses-tags'>
					<h3 className='font-weight-bold'>Tags</h3>
					<ul className='tags mb-5'>
						{tags &&
							tags.split(',').map((item, i) => {
								return (
									<li className='small' key={i}>
										- {item}
									</li>
								);
							})}
					</ul>
					{quzeTags && (
						<Fragment>
							<h3 className='font-weight-bold'>Quze Tags</h3>
							<ul className='tags'>
								{quzeTags.split(',').map((item, i) => {
									return (
										<li className='small' key={i}>
											- {item}
										</li>
									);
								})}
							</ul>
						</Fragment>
					)}
				</section>
			</Fragment>
		);
	}
}

export default SingleCourse;
