import React, { useState } from 'react';

const Login = () => {
	const [ identity, setIdentity ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ eyes, setEyes ] = useState(false);
	const [ typeInput, setTypeInput ] = useState(false);

	const onChangeIdentity = (e) => {
		setIdentity(e.target.value);
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const onChangeIcon = (e) => {
		setEyes(!eyes);
		setTypeInput(!typeInput);
	};

	return (
		<div>
			<div className="row" style={{ marginBottom: '5vh' }}>
				<div class="form-group offset-md-2 col-md-4 text-center">
					<label style={{ color: 'black' }}>
						<b>Login</b>
					</label>
				</div>
				<div class="form-group col-md-4 text-center">
					<label style={{ color: 'black' }}>Registration</label>
				</div>
			</div>
			<div className="row" style={{ marginBottom: '5vh' }}>
				<div class="form-group offset-md-2 col-md-8 text-center">
					<h1 style={{ color: 'black' }}>Login</h1>
				</div>
			</div>
			<div className="row">
				<div class="form-group offset-md-2 offset-2 col-8 col-md-8">
					<label for="identity">Email or Phone</label>
					<input
						type="text"
						class="form-control"
						id="identity"
						placeholder="example : example@gmail.com"
						value={identity}
						onChange={onChangeIdentity}
					/>
				</div>
			</div>
			<div className="row">
				<div class="form-group offset-md-2 offset-2 col-8 col-md-8">
					<label for="password">Passowrd</label>
					<div class="input-group mb-3">
						<input
							type={typeInput ? 'text' : 'password'}
							class="form-control"
							id="password"
							placeholder={typeInput ? 'your password' : '********'}
							value={password}
							onChange={onChangePassword}
						/>
						<div class="input-group-append">
							<span className="input-group-text" onClick={onChangeIcon}>
								{eyes ? (
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										class="bi bi-eye"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
										/>
										<path
											fill-rule="evenodd"
											d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
										/>
									</svg>
								) : (
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										class="bi bi-eye-slash"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
										<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
										<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z" />
										<path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
									</svg>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div class="form-group offset-md-2 offset-2 col-8 col-md-8">
					<button
						className="btn btn-default col-md-12"
						style={{ backgroundColor: 'DodgerBlue', color: 'white' }}
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
