import React from 'react';
import PropTypes from 'prop-types';
import { Section, TitleWrapper, TitleLine, Li } from '../styles/commons';

const Education = ({ data }) => (
	<Section dark id="education" aria-labelledby="section-title-projects">
		<TitleWrapper dark>
			<h2 className="title" id="section-title-projects">EDUCATION</h2>
			<TitleLine />
		</TitleWrapper>
		<ul>
			{data.map((edu, index) => {
				const key = `edu-key__${index}`;
				return (
					<Li key={key} edu>
						<div className="main">
							<div className="title">{edu.time}. {edu.title}</div>
						</div>
					</Li>
				);
			})}
		</ul>
	</Section>
);

Education.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			time: PropTypes.string.isRequired
		})
	).isRequired
};

export default Education;
