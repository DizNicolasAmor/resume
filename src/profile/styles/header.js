import styled, { css } from 'styled-components';
import { FONT, COLOR, DEVICE } from './variables';

export const HeaderWrapper = styled.div`
	background: ${COLOR.WHITE_2};
	padding: 26px;
	position: relative;
`;
export const HeaderTitle = styled.div`
    font-family: ${FONT.FAMILY.MAIN};
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 6px 0;
    color: ${COLOR.MAIN};
    text-align: left;
    cursor: default;
    ${props =>
		props.isName
			&& css`
				font-size: x-large;
			`}
    ${props =>
		props.isPosition
			&& css`
				font-size: 16px;
				font-weight: 400;
			`}
    @media ${DEVICE.TABLET} {
        text-align: center;
    }
`;
export const MenuWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 21px 0 0 0;
	button {
		border: none;
		border-radius: 3px;
		font-family: ${FONT.FAMILY.MAIN};
		font-size: 12px;
		letter-spacing: 0.6px;
		color: ${COLOR.WHITE};
		background: ${COLOR.GREY};
		margin: 1px;
		padding: 9px 12px;
		text-transform: uppercase;
		cursor: pointer;
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
		&:hover {
			opacity: 0.6;
		}
		&:focus {
			outline: 1px solid ${COLOR.MAIN};
		}
	}
	${props =>
		props.isMobile
		&& css`
			margin: 0;
			.icon-menu {
				position: absolute;
				top: 18px;
				right: 18px;
				cursor: pointer;
				svg {
					width: 24px;
					height: 24px;
					path {
						fill: ${COLOR.MAIN};
					}
				}
				&.open {
					z-index: 10;
				}
				&.close {
					z-index: 0;
				}
			}
		`}
`;
export const Backdrop = styled.div`
	opacity: 0;
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: #222;
	z-index: 3;
	transition: opacity 0.3s ease-in-out;
	&.active {
		visibility: visible;
		opacity: 0.4;
	}
	&.inactive {
		opacity: 0;
		z-index: -1;
	}
`;
export const MenuMobile = styled.div`
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 18vh 30px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background-color: ${COLOR.LIGHTGREY};
    z-index: 4;
    transition: opacity 0.3s ease-in-out;
    &.active {
        visibility: visible;
        opacity: 1;
    }
    &.inactive {
        opacity: 0;
        z-index: -1;
    }
    display: flex;
    flex-direction: column;
    align-items; center;
    justify-content: space-around;
    .button-mobile {
        margin: 0 auto;
        font-size: x-large;
        background: none;
        border-bottom: 3px solid #FFF;
        width: auto;
    }
`;
