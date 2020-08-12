import React, { Component } from 'react';

export default class Alerts extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	closeAlert = (e) => {
		e.preventDefault();
		this.props.close();
	};

	render() {
		const { message, title, color } = this.props;
		const divStyle = `text-white px-6 py-2 flex justify-between border-0 rounded relative mb-4 bg-${color}-500`;
		let alert = Array.isArray(message) ? (
			message.map((msg) => (
				<div className={divStyle}>
					<div>
						<span className="text-xl inline-block mr-auto align-middle">
							<i className="fas fa-bell" />
						</span>
						<span className="inline-block align-middle mr-8">
							<b className="capitalize">{title}</b> {msg}
						</span>
					</div>
					<div>
						<button
							className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
							onClick={this.closeAlert.bind(this)}
						>
							<span>×</span>
						</button>
					</div>
				</div>
			))
		) : (
			<div className={divStyle}>
				<div>
					<span className="text-xl inline-block mr-auto align-middle">
						<i className="fas fa-bell" />
					</span>
					<span className="inline-block align-middle mr-8">
						<b className="capitalize">{title}</b> {message}
					</span>
				</div>
				<div className="flex items-center">
					<button
						className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none"
						onClick={this.closeAlert.bind(this)}
					>
						<span>×</span>
					</button>
				</div>
			</div>
		);
		return alert;
	}
}
