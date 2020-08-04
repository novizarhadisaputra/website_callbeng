import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import VerificationPage from './pages/verification';
import NotFound from './pages/notFound';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPage} />

				<Route exact path="/verification" component={VerificationPage} />

				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}
