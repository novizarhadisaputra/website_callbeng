import React, { useState } from 'react';
import axios from 'axios';
import imageSide from '../../assets/images/side.jpg';
import imageLogo from '../../assets/images/logo-callbeng.png';

const useFormInput = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange
	};
};

const RegistrationPage = (props) => {
	const name = useFormInput('');
	const email = useFormInput('');
	const phone = useFormInput('');
	const password = useFormInput('');
	const [ loading, setLoading ] = useState(false);

	const moveLogin = () => {
		props.history.push('/');
	};
	// handle button click of login form
	const registration = () => {
		setLoading(true);
		axios
			.post(`${process.env.REACT_APP_API_URL}/registration`, { email: email.value, password: password.value })
			.then((response) => {
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				if (error.response.status === 401) console.log(error.response.data.message);
				else console.log('Something went wrong. Please try again later.');
			});
	};
	return (
		<div className="h-screen overflow-hidden w-screen bg-blue-400 md:bg-gray-300">
			<div className="md:flex md:items-center md:justify-center h-full">
				<div className="block w-3/4 sm:w-1/2 p-10 md:hidden ml-auto mr-auto">
					<img src={imageLogo} alt="" className="w-3/4 ml-auto mr-auto" />
				</div>
				<div className="w-full p-2 md:flex ml-auto mr-auto max-w-sm md:max-w-6xl">
					<div className="bg-white md:w-1/2 p-8">
						<h1 className="text-3xl text-gray text-center">Sign Up</h1>
						<form className="text-gray-600 text-sm">
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="text"
									id="name"
									placeholder="Name"
									{...name}
								/>
							</div>
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="email"
									id="email"
									placeholder="Email"
									{...email}
								/>
							</div>
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="text"
									id="phone"
									placeholder="Phone Number"
									{...phone}
								/>
							</div>
							<div className="my-3">
								<input
									className="border w-full focus:border-blue-500 outline-none py-2 px-4 rounded"
									type="password"
									id="password"
									placeholder="Password"
									{...password}
								/>
							</div>
							<div className="my-3 flex justify-between">
								<button onClick={moveLogin} className="border rounded w-1/2 py-2 ">
									Sign In
								</button>
								<button
									className="border rounded w-1/2 py-2 bg-blue-600 text-white ml-2"
									onClick={registration}
								>
									{loading ? 'Loading' : 'Sign Up'}
								</button>
							</div>
						</form>
					</div>
					<div className="hidden md:block md:w-1/2">
						<img className="h-full w-full" alt="" src={imageSide} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationPage;
