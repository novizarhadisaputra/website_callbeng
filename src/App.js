import React, { useState, useEffect } from 'react';
import Routes from './routes';
import axios from 'axios';
import { getToken, removeUserSession, setUserSession } from './utils/Common';

const App = () => {
	const [ authLoading, setAuthLoading ] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			return;
		}

		axios
			.get(`${process.env.REACT_APP_API_URL}/verify-token?token=${token}`)
			.then((response) => {
				setUserSession(response.data.data.token, response.data.data.user);
				setAuthLoading(false);
			})
			.catch((error) => {
				removeUserSession();
				setAuthLoading(false);
			});
	}, []);

	if (authLoading && getToken()) {
		return (
			<div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
				<span
					className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
					style={{
						top: '50%'
					}}
				>
					<i className="fas fa-circle-notch fa-spin fa-5x" />
				</span>
			</div>
		);
	}
	return (
		<div>
			<Routes />
		</div>
	);
};

export default App;
