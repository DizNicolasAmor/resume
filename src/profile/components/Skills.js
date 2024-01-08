import React from 'react';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import { Section, TitleWrapper, TitleLine } from '../styles/commons';
import { SkillsBody, SkillLogo } from '../styles/skills';

const Skills = ({ skills }) => {
	return (
		<Section id="skills" aria-labelledby="section-title-skills">
			<TitleWrapper>
				<h2 className="title" id="section-title-skills">SKILLS</h2>
				<TitleLine />
			</TitleWrapper>
			<SkillsBody>
				{skills.map(skill => (
					<SkillLogo key={skill.title}>
						<InlineSVG role="img" alt={skill.title} src={skill.svg} />
						<p className="name">{skill.title}</p>
					</SkillLogo>
				))}
			</SkillsBody>
		</Section>
	);
};

Skills.propTypes = {
	skills: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			svg: PropTypes.string.isRequired,
			hasSVG: PropTypes.bool
		})
	).isRequired
};

export default Skills;
