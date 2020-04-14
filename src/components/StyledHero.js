import styled from 'styled-components';
import defaultImg from '../img/showcase.jpg';

const StyledHero = styled.header`
	min-height: ${(props) => (props.minHeight ? props.minHeight : '75vh')};
	width: 100vw;
	background-color: var(--dark-color);
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&:before {
		content: '';
		background: url(${(props) => (props.img ? props.img : defaultImg)})
			center/cover no-repeat;
		position: absolute;
		object-fit: cover;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.1;
	}

	@media screen and (max-width: 1045px) {
		background-color: black;
	}
`;

export default StyledHero;
