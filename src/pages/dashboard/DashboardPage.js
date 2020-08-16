import React, { Component } from 'react';
import { getUser, removeUserSession } from '../../utils/Common';
import PropTypes from 'prop-types';
import Sidebars from '../../components/sidebars/Sidebars';

export default class DashboardPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accordion: false,
			user: getUser()
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
		return (
			<div className=" h-screen w-screen bg-gray-200 ">
				<Sidebars data={this.state} showAccordion={showAccordion} logout={handleLogout} />
			</div>
		);
	}
}
