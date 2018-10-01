import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import Collapse from 'react-collapse';
import {
	Section,
	TitleWrapper,
	TitleLine
} from './styles/commons';
import {
	ProjectsBody,
	Project,
	ProjectDescription
} from './styles/projects';

const Projects = ({
	data,
	projectActive,
	updateProjectActive
}) => (
	<div>
		{
			data !== undefined && (
			<Section dark id="projects">
				<TitleWrapper dark>
					<div className="title">PROJECTS</div>
					<TitleLine />
				</TitleWrapper>
				<ProjectsBody>
					{
					data.map((pro, index) => {
						const key = `pro-key__${index}`;
						return (
							<Project key={key}>
								<div className="row">
									<button
										type="button"
										className="title"
										onClick={() => { updateProjectActive(pro.title); }}
									>
										<div className="toogle-collapse">
											{ projectActive === pro.title ? '-' : '+'}
										</div>
										{pro.title}
									</button>
									<a href={pro.link} className="link" target="_blank" rel="noreferrer noopener">
										Link
									</a>
									<a href={pro.repo} className="repo" target="_blank" rel="noreferrer noopener">
										Repo
									</a>
								</div>

								<Collapse isOpened={projectActive === pro.title}>
									<ProjectDescription>
										<div className="img-wrapper">
											<InlineSVG src={pro.image} />
										</div>
										<div className="description-text">{pro.description}
											<br />{pro.techs}
										</div>
									</ProjectDescription>
								</Collapse>
							</Project>
						);
					})
				}
				</ProjectsBody>
			</Section>
			)
			}
	</div>
);

Projects.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		techs: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		repo: PropTypes.string.isRequired
	})),
	projectActive: PropTypes.string.isRequired,
	updateProjectActive: PropTypes.func.isRequired
};
Projects.defaultProps = {
	data: undefined
};

export default Projects;
