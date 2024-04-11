/** @format */

import React, { useContext } from 'react';
import { link } from './FeaturedData';
import { ThemeContext } from '../../App';
import { useProjectStyles } from './styles';
import LightButton from '../Button/Button';
import { AppTheme } from '../../contexts/AppTheme';

const Featured = () => {
	const classes = useProjectStyles();

	const { theme } = useContext(ThemeContext);

	const projectStyle: AppTheme = {
		dark: {
			backgroundColor: '#121212',
			color: 'white',
		},
		light: {
			backgroundColor: 'white',
			color: '#121212',
		},
		common: {
			transition: 'all 1s ease',
			fontSize: '24px',
		},
	};

	const themeStyle = {
		...projectStyle.common,
		...(theme === 'light' ? projectStyle.light : projectStyle.dark),
	};

	return (
		<section className={classes.root}>
			<div className={classes.sectionName}>
				<p className={classes.header}>Featured Work</p>
			</div>
			<div className={classes.flexContainer}>
				{link.map((item) => {
					const { id, name, image, text, header, url } = item;
					return (
						<section className={classes.Cardcontainer}>
							<article
								key={id}
								className={classes.flexItem}>
								<div>
									<img
										className={classes.image}
										src={image}
										alt={text}
									/>
									<a
										href={url}
										style={{
											color: 'white',
											textDecoration: 'none',
											fontSize: '20px',
										}}>
										<p
											className={classes.projectName}
											style={themeStyle}>
											{name}
										</p>
									</a>
									<p className={classes.description}>{text}</p>
									<LightButton text="View Project" />
								</div>
							</article>
						</section>
					);
				})}
			</div>
		</section>
	);
};

export default Featured;
