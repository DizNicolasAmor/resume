import React from 'react';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import { Section, TitleWrapper, TitleLine } from '../styles/commons';
import { AboutBody, Info, DescriptionWrapper, Image, Description } from '../styles/about';

const About = ({ data }) => (
	<Section id="about">
		<TitleWrapper>
			<div className="title">ABOUT ME</div>
			<TitleLine />
		</TitleWrapper>
		<AboutBody>
			<Info>
				<div>
					<span>Phone</span>
					{data.phone}
				</div>
				<div>
					<span>Email</span>
					{data.email}
				</div>
				<div className="about__icons">
					{data.social.map(eachSocial => (
						<a
							key={eachSocial.title}
							href={eachSocial.link}
							title={eachSocial.title}
							target="_blank"
							rel="noreferrer noopener"
						>
							<InlineSVG src={eachSocial.src} />
						</a>
					))}
				</div>
			</Info>
			<DescriptionWrapper>
				<Image>
					<img src={data.avatar} alt="avatar" />
				</Image>
				<Description>{data.description}</Description>
			</DescriptionWrapper>
		</AboutBody>
	</Section>
);

About.propTypes = {
	data: PropTypes.shape({
		phone: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		social: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				link: PropTypes.string.isRequired,
				src: PropTypes.string
			})
		).isRequired,
		description: PropTypes.string.isRequired,
		avatar: PropTypes.string.isRequired
	})
};

export default About;
