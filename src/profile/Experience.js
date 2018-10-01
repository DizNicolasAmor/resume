import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	TitleWrapper,
	TitleLine,
	Li
} from './styles/commons';

const Experience = ({ data }) => (
	<div>
		{
			data !== undefined && (
			<Section dark id="experience">
				<TitleWrapper dark>
					<div className="title">EXPERIENCE</div>
					<TitleLine />
				</TitleWrapper>
				<ul>
					{
					data.map((exp, index) => {
						const key = `exp-key__${index}`;
						return (
							<Li key={key}>
								<div className="main">
									<div className="title">
										<b>{exp.title}</b>
										in
										{ exp.companyLink !== undefined
											? (
												<a href={exp.companyLink} target="_blank" rel="noreferrer noopener">
													<b>{exp.company}</b>
												</a>
											)
											: <b>{exp.company}</b>
										}
									</div>
									<div className="time">{exp.time}</div>
								</div>
								<div className="description">{exp.description}</div>
							</Li>
						);
					})
				}
				</ul>
			</Section>
			)}
	</div>
);

Experience.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		company: PropTypes.string.isRequired,
		companyLink: PropTypes.string,
		time: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}))
};
Experience.defaultProps = {
	data: undefined
};

export default Experience;
