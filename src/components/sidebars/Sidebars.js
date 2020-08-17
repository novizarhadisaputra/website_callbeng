import React, { Component } from 'react';
import Navbars from '../navbars/Navbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserFriends, faHistory } from '@fortawesome/free-solid-svg-icons';
import DashboardTransactions from '../../pages/dashboard-transactions/DashboardTransactions';

export default class Sidebars extends Component {
	render() {
		const { showAccordion, goToMenu, data, logout } = this.props;
		const navLinkActiveStyle = `flex px-4 py-3 bg-blue-500 text-white`;
		const navLinkStyle = `flex text-gray-600 px-4 py-3 hover:bg-blue-500 hover:text-white`;
		
		return (
			<div>
				<div className="absolute w-full min-w-screen-lg left-0 top-0 h-full min-h-full">
					<div className="flex">
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
									<div
										className={data.isUserMenu ? navLinkActiveStyle : navLinkStyle}
										onClick={() => goToMenu('isUserMenu')}
										style={{ cursor: 'pointer' }}
									>
										<div className="w-1/5">
											<FontAwesomeIcon className="ml-3" icon={faUserFriends} />
										</div>
										<div className="w-4/5">
											<span className="text-left">Users</span>
										</div>
									</div>
									<div
										className={data.isTransactionMenu ? navLinkActiveStyle : navLinkStyle}
										onClick={() => goToMenu('isTransactionMenu')}
										style={{ cursor: 'pointer' }}
									>
										<div className="w-1/5">
											<FontAwesomeIcon className="ml-3" icon={faHistory} />
										</div>
										<div className="w-4/5">
											<span className="text-left">Transactions</span>
										</div>
									</div>
								</div>
							</div>

							{/* End Desktop  */}
						</div>
						<div className="hidden md:hidden lg:w-5/6 lg:block">
							<Navbars {...this.props} />
							{data.isTransactionMenu && <DashboardTransactions />}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
