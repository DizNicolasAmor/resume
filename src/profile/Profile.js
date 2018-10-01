import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import { Wrapper } from './styles/commons';

const Profile = ({
	data,
	projectActive,
	updateProjectActive,
	isMenuOpen,
	openMenu,
	closeMenu
}) => (
	<Wrapper>
		<Header
			header={data.header}
			menu={data.menu}
			isMenuOpen={isMenuOpen}
			openMenu={openMenu}
			closeMenu={closeMenu}
		/>
		<About data={data.about} />
		<Skills skills={data.skills} />
		<Projects
			data={data.projects}
			projectActive={projectActive}
			updateProjectActive={updateProjectActive}
		/>
		<Experience data={data.experience} />
		<Education data={data.education} />
	</Wrapper>
);

Profile.propTypes = {
	data: PropTypes.shape({
		header: PropTypes.object,
		menu: PropTypes.arrayOf(PropTypes.object),
		about: PropTypes.object,
		skills: PropTypes.arrayOf(PropTypes.object),
		projects: PropTypes.arrayOf(PropTypes.object),
		experience: PropTypes.arrayOf(PropTypes.object),
		education: PropTypes.arrayOf(PropTypes.object)
	}),
	projectActive: PropTypes.string.isRequired,
	updateProjectActive: PropTypes.func.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
	openMenu: PropTypes.func.isRequired,
	closeMenu: PropTypes.func.isRequired
};
Profile.defaultProps = {
	data: undefined
};

export default Profile;
