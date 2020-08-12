import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
// import RegistrationPage from './pages/registration/RegistrationPage';
import VerificationPage from './pages/verification/VerificationPage';
import NotFound from './pages/error/NotFound';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<PublicRoute exact path="/" component={LoginPage} />
				{/* <PublicRoute exact path="/registration" component={RegistrationPage} /> */}
				<PublicRoute exact path="/verification" component={VerificationPage} />

				<PrivateRoute exact path="/dashboard" component={DashboardPage} />	

				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}
