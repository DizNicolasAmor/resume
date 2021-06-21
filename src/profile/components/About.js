import React from 'react';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import { Section, TitleWrapper, TitleLine } from '../styles/commons';
import { AboutBody, Info, DescriptionWrapper, Image, Description } from '../styles/about';

const About = ({ data }) => (
	<Section id="about" aria-labelledby="section-title-about">
		<TitleWrapper>
			<h2 className="title" id="section-title-about">ABOUT ME</h2>
			<TitleLine />
		</TitleWrapper>
		<AboutBody>
			<Info>
				<div>
					<span>Email</span>
					{data.email}
				</div>
				<div className="about__icons">
					{data.social.map(eachSocial => (
						<a
							aria-label={eachSocial.ariaLabel}
							key={eachSocial.title}
							href={eachSocial.link}
							title={eachSocial.title}
							target="_blank"
							rel="noreferrer noopener"
						>
							<InlineSVG aria-hidden role="img" src={eachSocial.src} />
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
