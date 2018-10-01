import React from 'react';
import PropTypes from 'prop-types';
import {
	Section,
	TitleWrapper,
	TitleLine,
	Li
} from './styles/commons';

const Education = ({ data }) => (
	<div>
		{
			data !== undefined && (
			<Section dark id="education">
				<TitleWrapper dark>
					<div className="title">EDUCATION</div>
					<TitleLine />
				</TitleWrapper>
				<ul>
					{
					data.map((edu, index) => {
						const key = `edu-key__${index}`;
						return (
							<Li key={key} edu>
								<div className="main">
									<div className="title">{edu.title}</div>
									<div className="time">{edu.time}</div>
								</div>
							</Li>
						);
					})
				}
				</ul>
			</Section>
			)}
	</div>
);

Education.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		time: PropTypes.string.isRequired
	}))
};
Education.defaultProps = {
	data: undefined
};

export default Education;
