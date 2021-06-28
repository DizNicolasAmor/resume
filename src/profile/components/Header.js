import React from 'react';
import scrollToElement from 'scroll-to-element';
import MediaQuery from 'react-responsive';
import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { HeaderWrapper, HeaderTitle, MenuWrapper, Backdrop, MenuMobile } from '../styles/header';

const iconMenuOpen =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>';
const iconMenuClose =
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>';
const scrollParams = {
	offset: 0,
	ease: 'out-quad',
	duration: 600
};

const Header = ({ header, menu, isMenuOpen, openMenu, closeMenu }) => (
	<div>
		{header !== undefined && menu !== undefined && (
			<HeaderWrapper id="header">
				<HeaderTitle isName>
					{header.name}
					<br/>
					<span>{header.position}</span>
				</HeaderTitle>

				<MediaQuery query="(max-width: 750px)">
					<MenuWrapper isMobile>
						<button
							aria-label="Open menu"
							className={`icon-menu ${isMenuOpen ? 'hidden' : ''}`}
							/* eslint-disable no-unused-expressions */
							onClick={openMenu}
						>
							<InlineSVG alt="Open menu icon" aria-hidden role="img" src={iconMenuOpen} />
						</button>
						{
							isMenuOpen && (
								<FocusTrap
									focusTrapOptions={{
										clickOutsideDeactivates: true,
										escapeDeactivates: true,
										onDeactivate: closeMenu,
										returnFocusOnDeactivate: true,
									}}
								>
									<div>
										<button
											aria-label="Close menu"
											className={`icon-menu ${isMenuOpen ? '' : ''}`}
											/* eslint-disable no-unused-expressions */
											onClick={closeMenu}
										>
											<InlineSVG alt="Close menu icon" aria-hidden role="img" src={iconMenuClose} />
										</button>
										<Backdrop className={isMenuOpen ? 'active' : 'inactive'} />
										<MenuMobile className={isMenuOpen ? 'active' : 'inactive'}>
											{menu.map(section => (
												<button
													aria-label={`Go to ${section.name} section`}
													type="button"
													key={section.name}
													className="button-mobile"
													onClick={() => {
														closeMenu();
														scrollToElement(`#${section.name}`, scrollParams);
													}}
												>
													{section.name}
												</button>
											))}
										</MenuMobile>
									</div>
								</FocusTrap>
							)
						}
					</MenuWrapper>
				</MediaQuery>

				<MediaQuery query="(min-width: 750px)">
					<MenuWrapper>
						{menu.map(section => (
							<button
								aria-label={`Go to ${section.name} section`}
								type="button"
								key={section.name}
								onClick={() => {
									scrollToElement(`#${section.name}`, {
										offset: 0,
										ease: 'out-quad',
										duration: 600
									});
								}}
							>
								{section.name}
							</button>
						))}
					</MenuWrapper>
				</MediaQuery>
			</HeaderWrapper>
		)}
	</div>
);

Header.propTypes = {
	header: PropTypes.shape({
		name: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired
	}),
	menu: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired
		})
	),
	isMenuOpen: PropTypes.bool.isRequired,
	openMenu: PropTypes.func.isRequired,
	closeMenu: PropTypes.func.isRequired
};
Header.defaultProps = {
	header: undefined,
	menu: undefined
};

export default Header;
