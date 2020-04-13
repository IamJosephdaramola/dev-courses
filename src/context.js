import React, { Component } from 'react';
import data from './data';
const CourseContext = React.createContext();

class CourseProvider extends Component {
	state = {
		courses: [],
		sortedCourses: [],
		loading: true
	};

	// get Data
	componentDidMount() {
		const courses = [...data];
		this.setState({
			courses,
			loading: false
		});
	}

	getCourse = (courseId) => {
		const tempCourseId = parseInt(courseId);
		let tempCourses = [...this.state.courses];

		const course = tempCourses.find((course) => course.courseId === tempCourseId);
		return course;
	};

	render() {
		return (
			<CourseContext.Provider
				value={{
					...this.state,
					getCourse: this.getCourse
				}}>
				{this.props.children}
			</CourseContext.Provider>
		);
	}
}

const CourseConsumer = CourseContext.Consumer;

export function withCourseConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<CourseConsumer>
				{(value) => <Component {...props} context={value} />}
			</CourseConsumer>
		);
	};
}

export { CourseProvider, CourseConsumer, CourseContext };
