import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const VerificationPage = () => {
	const urlParams = new URLSearchParams(window.location.search);
	if (!urlParams.has('token')) return <Redirect to="/404" />;
	for (let key of urlParams.keys()) {
		if (key !== 'token') return <Redirect to="/404" />;
	}

	return (
		<React.Fragment>
			<h2>Verification</h2>
			<Link to="/">Home</Link>
		</React.Fragment>
	);
};

export default VerificationPage;
