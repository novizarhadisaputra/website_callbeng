import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../../utils/Common';
import imageSide from '../../assets/images/side.jpg';
// import imageLogo from '../../assets/images/logo-callbeng.png';
import Alerts from '../../components/alerts/Alerts';
// import Loading from '../../components/loadings/Loadings';

const useFormInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};

const LoginPage = (props) => {
	const email = useFormInput('');
	const password = useFormInput('');
	const [ loading, setLoading ] = useState(false);
	const [ alert, setAlert ] = useState(false);
	const [ message, setMessage ] = useState('');

	const closeAlert = () => {
		setAlert(false);
	};
	// handle button click of login form
	const handleLogin = () => {
		setLoading(true);
		axios
			.post(`${process.env.REACT_APP_API_URL}/login`, { email: email.value, password: password.value })
			.then((response) => {
				setLoading(false);
				setUserSession(response.data.data.token, response.data.data.user);
				props.history.push('/dashboard');
			})
			.catch((error) => {
				setLoading(false);
				if (error.response === undefined) {
					setMessage(error.toString());
					setAlert(true);
				} else {
					if (error.response.status === 401) {
						setMessage(error.response.data.message);
						setAlert(true);
					} else {
						setMessage(error.response.data.message);
						setAlert(true);
					}
				}
			});
	};

	return (
		<div className="h-screen overflow-hidden w-screen bg-white md:bg-gray-300">
			<div className="md:flex md:items-center md:justify-center h-full">
				<div
					className="w-full bg-blue-400 md:hidden ml-auto mr-auto"
					style={{ height: '20rem', borderBottomLeftRadius: '20%', borderBottomRightRadius: '20%' }}
				>
					{/* <img src={imageLogo} alt="" className="w-3/4 ml-auto mr-auto" /> */}
				</div>
				<div className="w-full -mt-40 md:mt-0 p-3 md:p-5 md:flex ml-auto mr-auto max-w-sm md:max-w-5xl">
					<div className="shadow-xs bg-white md:w-1/2 p-8">
						{alert && <Alerts title="Warning!" close={closeAlert} message={message} color="red" />}

						<h1 className="text-3xl text-gray text-center">Sign In</h1>
						<div className="text-gray-600 text-sm">
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="email"
									placeholder="Email"
									{...email}
								/>
							</div>
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="password"
									placeholder="Password"
									{...password}
								/>
							</div>
							<div className="my-3 flex justify-between">
								<label htmlFor="" className="sm:text-xs md:text-base">
									<input className="" type="checkbox" /> Remember me
								</label>

								<a href="http://google.com" className="sm:hover:text-blue-500 sm:text-xs md:text-base md:hover:text-blue-500">
									Forgot password ?
								</a>
							</div>
							<div className="my-3 flex justify-between">
								<button
									className="border rounded w-full py-2 bg-blue-600 text-white"
									onClick={handleLogin}
									disabled={loading}
								>
									{loading ? 'Loading....' : 'Sign In'}
								</button>
							</div>
						</div>
					</div>
					<div className="hidden md:block md:w-1/2">
						<img className="h-full w-full" alt="" src={imageSide} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
