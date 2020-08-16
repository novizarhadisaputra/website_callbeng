import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbars from '../navbars/Navbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends, faHistory } from '@fortawesome/free-solid-svg-icons';

export default class Sidebars extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { showAccordion, data, logout } = this.props;

		return (
			<div>
				<div className="absolute left-0 top-0 h-full min-h-full">
					<div className="w-screen flex">
						<div className="lg:w-1/6">
							<div className="block p-4 lg:hidden">
								<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
									<FontAwesomeIcon icon={faBars} />
								</button>
							</div>
							{/* Desktop  */}
							<div className="hidden md:hidden lg:block lg:py-4 lg:bg-white lg:h-full lg:min-h-screen">
								<div className="text-2xl text-center text-blue-500">Callbeng Admin</div>
								<div className="my-20">
									<div className="flex text-gray-600 px-4 py-3 hover:bg-blue-500 hover:text-white">
										<div className="w-1/5">
											<FontAwesomeIcon className="ml-3" icon={faUserFriends} />
										</div>
										<div className="w-4/5">
											<span className="text-left" style={{ cursor: 'pointer' }}>
												Users
											</span>
										</div>
									</div>
									<div className="flex text-gray-600 px-4 py-3 hover:bg-blue-500 hover:text-white">
										<div className="w-1/5">
											<FontAwesomeIcon className="ml-3" icon={faHistory} />
										</div>
										<div className="w-4/5">
											<span className="text-left" style={{ cursor: 'pointer' }}>
												Transactions
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* End Desktop  */}
						</div>
						<div className="hidden md:hidden lg:w-5/6 lg:block">
							<Navbars data={data} showAccordion={showAccordion} logout={logout} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
