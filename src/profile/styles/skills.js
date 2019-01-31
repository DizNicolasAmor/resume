import styled from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

export const SkillsBody = styled.div`
	width: 560px;
	height: 100px;
	margin: 0 auto;
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch !important;
	position: relative;

	@media (max-width: 650px) {
		width: 420px;
	}
	@media (max-width: 550px) {
		width: 350px;
	}
	@media (max-width: 480px) {
		width: 280px;
	}
	@media (max-width: 370px) {
		width: 210px;
	}

	.swiper-container {
		width: 100%;
		height: auto;
		position: relative;
		overflow: hidden;
		.swiper-wrapper {
			width: 100%;
			display: flex !important;
			flex-flow: row nowrap;
		}
		.swiper-slide {
			position: relative;
		}
	}
	div {
		position: relative;
		height: 100%;
		display: block;
		img {
			width: auto;
			height: auto;
		}
	}

	.arrow {
		position: absolute;
		top: 29px;
		height: 100%;
		border: none;
		background: transparent;
		cursor: pointer;
		svg path {
			fill: ${COLOR.MAIN_DARK};
		}
		-webkit-transition: 0.3s;
		transition: 0.3s;
		&:hover {
			opacity: 0.6;
		}
		&:focus {
			outline: none;
		}
		&.prev {
			left: -32px;
			svg {
				transform: rotate(180deg);
			}
		}
		&.next {
			right: -32px;
		}
	}
`;
export const SkillLogo = styled.div`
	width: 70px;
	height: 70px;
	display: inline-flex;
	position: relative;
	svg {
		width: 70px;
		height: 70px;
		padding: 9px;
		box-sizing: border-box;
		cursor: pointer;
		// filter: sepia(5) hue-rotate(160deg);
		cursor: default;
	}
	.name {
		position: absolute;
		bottom: 0px;
		margin: 0;
		background: transparent;
		width: 70px;
		height: 30px;
		text-align: center;
		font-size: ${FONT.SIZE.TEXT};
		font-weight: 500;
		letter-spacing: 0.3px;
		color: ${COLOR.MAIN_DARK};
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: default;
		@media ${DEVICE.TABLET} {
			font-size: ${FONT.SIZE.MOBILE_TEXT};
		}
	}
`;
