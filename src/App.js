import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// pages
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import Error from './pages/Error';

function App() {
	return (
		<Fragment>
			<Switch>
				<Route exact path='/' component={Courses} />
				<Route exact path='/:courseId' component={SingleCourse} />
				<Route component={Error} />
			</Switch>
		</Fragment>
	);
}

export default App;
