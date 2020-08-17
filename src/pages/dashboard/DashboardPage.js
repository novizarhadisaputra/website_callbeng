import React, { Component } from 'react';
import { getUser, removeUserSession } from '../../utils/Common';
import Sidebars from '../../components/sidebars/Sidebars';
import DashboardTransactions from '../dashboard-transactions/DashboardTransactions';

export default class DashboardPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accordion: false,
			user: getUser(),
			isUserMenu: false,
			isTransactionMenu: false
		};
	}

	render() {
		const showAccordion = () => {
			this.setState({
				accordion: !this.state.accordion
			});
		};

		const handleLogout = () => {
			removeUserSession();
			this.props.history.push('/');
		};
		return <Sidebars data={this.state} showAccordion={showAccordion} logout={handleLogout} />;
	}
}
