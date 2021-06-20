import styled, { css, injectGlobal } from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

/* eslint-disable no-unused-expressions */
injectGlobal`
    body {
        margin: 0;
        padding: 0;
    }
`;

export const Wrapper = styled.div`
	width: 750px;
	box-sizing: border-box;
	margin: 50px auto;
	padding: 0;
	background: ${COLOR.WHITE};
	border: 1px solid ${COLOR.LIGHTGREY};
	border-radius: 3px;
	box-shadow: 3px 3px 6px ${COLOR.LIGHTGREY} @media ${DEVICE.TABLET} {
		width: 100%;
		margin: 0;
	}
	@media ${DEVICE.TABLET} {
		width: 100%;
		margin: 0;
	}
`;
export const Section = styled.section`
	background: ${COLOR.WHITE};
	padding: 18px 26px;
	${props =>
		props.dark &&
		css`
			background: ${COLOR.DARK};
		`}
    @media ${DEVICE.TABLET} {
		ul {
			padding-inline-start: 15px;
		}
    }
`;
export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title {
		display: block;
		font-family: ${FONT.FAMILY.MAIN};
		font-size: ${FONT.SIZE.TITLE};
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 6px;
		margin: 0 9px;
		color: ${COLOR.MAIN};
		border-bottom: 1px solid ${COLOR.MAIN};
		cursor: default;
	}
	${props =>
		props.dark &&
		css`
			.title {
				background: ${COLOR.MAIN_LIGHT};
				color: ${COLOR.WHITE};
				padding: 6px;
				border-bottom: none;
				border-radius: 3px;
			}
		`}
    @media ${DEVICE.TABLET} {
        .title {
            font-size: ${FONT.SIZE.MOBILE_TITLE};
        }
    }
`;
export const TitleLine = styled.div`
	display: block;
	content: '';
	width: 420px;
	height: 1px;
	border-radius: 3%;
	background: ${COLOR.MAIN_LIGHT};
	@media ${DEVICE.TABLET} {
		width: 40vw;
	}
`;
export const Li = styled.li`
	color: ${COLOR.WHITE};
	padding: 3px 0;
	text-align: justify;
	cursor: default;
	.main {
		position: relative;
		.title{
			display: inline-block;
			margin: 6px 18px;
			font-size: ${FONT.SIZE.TEXT};
			letter-spacing: 0.3px;
			a, b {
				color: ${COLOR.WHITE};
				margin: 0 6px;
				-webkit-transition: 0.3s;
				transition: 0.3s;
			}
			a:hover {opacity: .6;}
		}
		.time {
			display: inline-block;
			margin: 6px 18px;
			font-size: ${FONT.SIZE.TEXT};
			position: absolute;
			left: 400px;
		}
	}
	.description {
		font-size: ${FONT.SIZE.LITTLE_TEXT};
	}
	${props =>
		props.edu &&
		css`
			padding: 0;
			.main .title,
			.main .time {
				margin: 0 18px;
			}
		`}
    @media ${DEVICE.TABLET} {
		margin-bottom: 6px;
        .main .title {
			font-size: ${FONT.SIZE.MOBILE_TEXT};
			text-align: left;
        }
        .main .time {
            display: none;
        }
        .description {
            font-size: ${FONT.SIZE.MOBILE_LITTLE_TEXT};
        }
    }
`;
