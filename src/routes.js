import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from "./pages/landing";
import VerificationPage from "./pages/verification";
import NotFound from "./components/NotFound";

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/verification">
					<VerificationPage />
				</Route>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}
