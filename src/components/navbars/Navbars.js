import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default class Navbars extends Component {
	
	render() {
		let { data, showAccordion, handleLogout } = this.props;

		return (
			<div className="w-full h-16">
				<nav className="flex max-h-full items-center justify-between bg-blue-500 p-6">
					<div className="" />
					<div className="hidden md:text-white md:block">
						<div onClick={showAccordion} style={{ cursor: 'pointer' }}>
							<FontAwesomeIcon icon={faUser} />
							<span className="ml-2">{data.user.name}</span>
						</div>
						{this.props.data.accordion && (
							<div className="w-full">
								<Accordion handleLogout={handleLogout} />
							</div>
						)}
					</div>
				</nav>
			</div>
		);
	}
}

export class Accordion extends Component {
	
	render() {
		return (
			<div className="absolute rounded bg-white shadow-md mt-2">
				<div className="text-gray-600 px-4 py-2 hover:bg-blue-500 hover:text-white">
					<FontAwesomeIcon icon={faLock} />
					<span className="ml-2" style={{ cursor: 'pointer' }}>
						Change Password
					</span>
				</div>
				<div className="text-gray-600 px-4 py-2 hover:bg-blue-500 hover:text-white">
					<FontAwesomeIcon icon={faSignOutAlt} />
					<span onClick={this.props.handleLogout} className="ml-2" style={{ cursor: 'pointer' }}>
						Sign Out
					</span>
				</div>
			</div>
		);
	}
}
