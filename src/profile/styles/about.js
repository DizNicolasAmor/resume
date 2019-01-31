import styled from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

export const AboutBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	@media ${DEVICE.TABLET} {
		flex-direction: column;
		align-items: center;
	}
`;
export const Info = styled.div`
	width: 230px;
	font-family: ${FONT.FAMILY.MAIN};
	font-size: ${FONT.SIZE.LITTLE_TEXT};
	letter-spacing: 0.05em;
	padding: 21px 0 0 0;
	color: ${COLOR.BLACK};
	text-align: justify;
	cursor: default;
	div {
		margin-bottom: 6px;
	}
	span {
		font-weight: 600;
		margin-right: 26px;
	}
	.about__icons {
		width: 100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		svg {
			width: 40px;
			-webkit-transition: 0.3s;
			transition: 0.3s;
			&:hover {
				opacity: 0.6;
			}
		}
	}
`;
export const DescriptionWrapper = styled.div`
	width: 460px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media ${DEVICE.TABLET} {
		width: 95%;
		align-items: center;
		justify-content: center;
	}
	@media ${DEVICE.MOBILE} {
		flex-direction: column;
	}
`;
export const Image = styled.div`
    width: 120px;
    height: 120px;
    margin: 9px;
    border-radius: 3px;
    box-shadow: 3px 3px 5px ${COLOR.LIGHTGREY}
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
    }
    @media ${DEVICE.TABLET} {
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const Description = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	height: 130px;
	font-family: ${FONT.FAMILY.MAIN};
	font-size: ${FONT.SIZE.TEXT};
	letter-spacing: 0.05em;
	color: ${COLOR.BLACK};
	text-align: justify;
	box-sizing: border-box;
	padding: 0 12px;
	cursor: default;
	@media ${DEVICE.TABLET} {
		width: 50%;
		font-size: ${FONT.SIZE.MOBILE_LITTLE_TEXT};
	}
	@media ${DEVICE.MOBILE} {
		width: 100%;
		height: auto;
	}
`;
