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
			prevMenu: '',
			isUserMenu: false,
			isTransactionMenu: false
		};
	}

	render() {
		const showAccordion = () => {
			return this.setState({
				accordion: !this.state.accordion
			});
		};

		const handleLogout = () => {
			removeUserSession();
			this.props.history.push('/');
		};

		const goToMenu = (menu) => {
			let changeMenu = {};
			changeMenu[menu] = true;
			changeMenu['prevMenu'] = menu;
			if (menu !== this.state.prevMenu) {
				changeMenu[this.state.prevMenu] = false;		
			}
			return this.setState(changeMenu);
		};

		const main = {
			showAccordion,
			handleLogout,
			goToMenu
		};
		return <Sidebars data={this.state} {...main} />;
	}
}
