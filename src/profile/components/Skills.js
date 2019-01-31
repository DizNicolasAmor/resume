import React from 'react';
import Swiper from 'react-id-swiper';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import { Section, TitleWrapper, TitleLine } from '../styles/commons';
import { SkillsBody, SkillLogo } from '../styles/skills';

const arrow =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve"><path clip-rule="evenodd" d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z" fill="#121313" fill-rule="evenodd" id="Chevron_Right"/><g/><g/><g/><g/><g/><g/></svg>';

const Skills = ({ skills }) => {
	let slider = null;
	function goNext() {
		if (slider) slider.slideNext();
	}
	function goPrev() {
		if (slider) slider.slidePrev();
	}
	const params = {
		slidesPerView: 8,
		loop: true,
		clickable: true,
		breakpoints: {
			651: { slidesPerView: 6 },
			551: { slidesPerView: 5 },
			481: { slidesPerView: 4 },
			371: { slidesPerView: 3 }
		}
	};
	return (
		<Section id="skills">
			<TitleWrapper>
				<div className="title">SKILLS</div>
				<TitleLine />
			</TitleWrapper>
			<SkillsBody>
				<Swiper
					{...params}
					ref={node => {
						if (node) slider = node.swiper;
					}}
				>
					{skills.map(skill => (
						<SkillLogo key={skill.title}>
							<InlineSVG src={skill.svg} />
							<p className="name">{skill.title}</p>
						</SkillLogo>
					))}
				</Swiper>
				<InlineSVG src={arrow} onClick={goPrev} className="arrow prev" />
				<InlineSVG src={arrow} onClick={goNext} className="arrow next" />
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
