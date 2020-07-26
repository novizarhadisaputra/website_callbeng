import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<React.Fragment>
			<h2>Landing Page</h2>
			<Link
				to={{
					pathname: '/verification',
					state: {
						name: 'Pevita Cleo Eileen Pearce',
						born: '1992-10-06'
					}
				}}
			>
				Go to verify
			</Link>
		</React.Fragment>
	);
};

export default LandingPage;
