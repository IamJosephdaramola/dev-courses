import styled from 'styled-components';
import defaultImg from '../img/showcase.jpg';

const StyledHero = styled.header`
	min-height: ${(props) => (props.minHeight ? props.minHeight : '75vh')};
	background-color: rgba(0, 0, 0, 0.1);
	background: url(${(props) => (props.img ? props.img : defaultImg)})
		center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default StyledHero;
