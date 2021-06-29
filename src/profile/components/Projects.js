import React from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import Collapse from 'react-collapse';
import { Section, TitleWrapper, TitleLine } from '../styles/commons';
import { ProjectsBody, Project, ProjectDescription } from '../styles/projects';

const Projects = ({ data, projectActive, updateProjectActive }) => (
	<Section dark id="projects" aria-labelledby="section-title-projects">
		<TitleWrapper dark>
			<h2 className="title" id="section-title-projects">PROJECTS</h2>
			<TitleLine />
		</TitleWrapper>
		<ProjectsBody>
			{data.map((pro, index) => {
				const key = `pro-key__${index}`;
				const isExpanded = projectActive === pro.title;
				const ariaLabelRow = `${isExpanded ? 'Collapse' : 'Expand'} ${pro.title} project information`;
				const toggleCollapseText = isExpanded ? '-' : '+';

				return (
					<Project key={key}>
						<div className="row">
							<button
								aria-label={ariaLabelRow}
								type="button"
								className="title"
								onClick={() => updateProjectActive(pro.title)}
							>
								<div className="toogle-collapse">
									{toggleCollapseText}
								</div>
								{pro.title}
							</button>
							<a
								aria-label={`See ${pro.title} project`}
								className="link"
								href={pro.link}
								rel="noreferrer noopener"
								target="_blank"
							>
								Link
							</a>
							<a
								aria-label={`See ${pro.title} project repository`}
								className="repo"
								href={pro.repo}
								rel="noreferrer noopener"
								target="_blank"
							>
								Repo
							</a>
						</div>

						<Collapse isOpened={isExpanded}>
							<ProjectDescription>
								<div className="img-wrapper">
									<InlineSVG
										aria-hidden
										alt={`${pro.title} descriptive image`}
										role="img"
										src={pro.image}
									/>
								</div>
								<div className="description-text">
									{pro.description}
									<br />
									{pro.techs}
								</div>
							</ProjectDescription>
						</Collapse>
					</Project>
				);
			})}
		</ProjectsBody>
	</Section>
);

Projects.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			techs: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			repo: PropTypes.string.isRequired
		})
	).isRequired,
	projectActive: PropTypes.string.isRequired,
	updateProjectActive: PropTypes.func.isRequired
};

export default Projects;
