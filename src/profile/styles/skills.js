import styled from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

export const SkillsBody = styled.div`
	width: 560px;
	height: auto;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
    justify-content: center;
	align-items: stretch;
    column-gap: 23px;
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

	div {
		position: relative;
		height: 90px;
		display: block;
		img {
			width: auto;
			height: auto;
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
		font-size: ${FONT.SIZE.LITTLE_TEXT};
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
