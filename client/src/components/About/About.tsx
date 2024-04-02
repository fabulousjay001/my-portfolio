/** @format */

import { useAboutStyles } from './Styles';
import { description } from './Data';
import { ThemeContext } from '../../App';
import {
	// JSXElementConstructor,
	// ReactElement,
	// ReactFragment,
	// ReactPortal,
	useContext,
} from 'react';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';

// import Description from './Data';

const About = () => {
	const classes = useAboutStyles();
	const theme = useContext(ThemeContext);
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<p style={{ paddingTop: '24px', fontSize: '24px' }}>About</p>{' '}
				<div className={classes.content}>
					<p>{description.topParagraph}</p>
					<p>{description.bottomParagraph}</p>
					<div className={classes.btnGroup}>
						<LightButton text="Let's talk" />
						<DarkButton text="View resume" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
