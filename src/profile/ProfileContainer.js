import React, { Component } from 'react';
import dataJSON from '../utils/data.json';
import Profile from './Profile';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectActive: 'Appointments Demo',
			data: {},
			isMenuOpen: false
		};
	}

	componentDidMount() {
		this.setState({ data: { ...dataJSON } });
	}

	updateProjectActive = (p) => {
		const { projectActive } = this.state;
		/* eslint-disable no-unused-expressions */
		projectActive === p
			? this.setState({ projectActive: '' }) : this.setState({ projectActive: p });
	}

	openMenu = () => { this.setState({ isMenuOpen: true }); }

	closeMenu = () => { this.setState({ isMenuOpen: false }); }

	render() {
		const {
			data,
			projectActive,
			isMenuOpen
		} = this.state;
		return (
			<div>
				<Profile
					data={data}
					projectActive={projectActive}
					updateProjectActive={this.updateProjectActive}
					isMenuOpen={isMenuOpen}
					openMenu={this.openMenu}
					closeMenu={this.closeMenu}
				/>
			</div>
		);
	}
}

export default ProfileContainer;
