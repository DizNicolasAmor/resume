import React, { Component } from 'react';
import data from './utils/data.json';
import Profile from './components/Profile';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectActive: 'Appointments Demo',
			isMenuOpen: false
		};
	}

	updateProjectActive = p => {
		const { projectActive } = this.state;
		projectActive === p
			? this.setState({ projectActive: '' })
			: this.setState({ projectActive: p });
	};

	openMenu = () => {
		this.setState({ isMenuOpen: true });
	};

	closeMenu = () => {
		this.setState({ isMenuOpen: false });
	};

	render() {
		const { projectActive, isMenuOpen } = this.state;
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
