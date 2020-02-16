import styled from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

export const ProjectsBody = styled.div`
	margin-top: 16px;
	padding-left: 40px;
	@media ${DEVICE.TABLET} {
		padding-left: 26px;
	}
`;
export const Project = styled.div`
	color: ${COLOR.WHITE};
	padding: 3px 0;
	text-align: justify;
	cursor: default;
	.row {
		position: relative;
		display: flex;
		.title {
			background: transparent;
			border: none;
			color: ${COLOR.WHITE};
			display: inline-block;
			margin: 3px 18px;
			font-size: ${FONT.SIZE.TEXT};
			font-weight: 600;
			letter-spacing: 0.3px;
			position: relative;
			-webkit-transition: 0.3s;
			transition: 0.3s;
			cursor: pointer;
			&:focus {
				outline-color: none;
				outline: none;
			}
			&:hover {
				opacity: 0.6;
			}
			.toogle-collapse {
				position: absolute;
				top: -2px;
				left: -36px;
				font-weight: 800;
				font-size: 18px;
			}
		}
		.link,
		.repo {
			display: inline-block;
			color: ${COLOR.WHITE};
			font-size: ${FONT.SIZE.TEXT};
			margin: 3px 18px;
			background: #1e90ff;
			padding: 3px 6px;
			border-radius: 3px;
			position: absolute;
			left: 400px;
			-webkit-transition: 0.3s;
			transition: 0.3s;
			&:hover {
				opacity: 0.6;
			}
		}
		.link {
			left: 300px;
		}
		@media ${DEVICE.TABLET} {
			.title {
				font-size: ${FONT.SIZE.MOBILE_TEXT};
				margin: 3px 12px;
			}
			.link,
			.repo {
				font-size: ${FONT.SIZE.MOBILE_LITTLE_TEXT};
				left: initial;
				right: -10px;
			}
			.link {
				right: 30px;
			}
		}
	}
`;
export const ProjectDescription = styled.div`
	display: flex;
	padding: 12px;
	.img-wrapper {
		margin: 0 18px;
		padding: 10px;
		box-sizing: border-box;
		width: 90px;
		height: 90px;
		background: ${COLOR.WHITE};
		border-radius: 3px;
		box-shadow: 1px 1px 5px #666;
		dispaly: flex;
		align-items: center;
		justify-content: center;
		svg {
			width: 100%;
			height: 100%;
			path,
			rect {
				fill: ${COLOR.MAIN_LIGHTER};
			}
		}
	}
	.description-text {
		width: 380px;
		margin: 0 18px;
		font-size: ${FONT.SIZE.LITTLE_TEXT};
		line-height: 16px;
		display: flex;
		align-items: center;
	}
	@media ${DEVICE.TABLET} {
		padding: 12px 0;
		flex-direction: column;
		justify-content: center;
		.description-text {
			width: 100%;
			margin: 9px 0 0 0;
		}
	}
`;
