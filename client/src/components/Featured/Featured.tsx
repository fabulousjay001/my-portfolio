/** @format */

import React, { useContext } from 'react';
import { link } from './FeaturedData';
import { ThemeContext } from '../../App';
import { useProjectStyles } from './styles';
import LightButton from '../Button/Button';

const Featured = () => {
	const classes = useProjectStyles();
	const theme = useContext(ThemeContext);

	return (
		<section className={classes.root}>
			<div className={classes.sectionName}>
				<p style={{ fontSize: '24px' }}>Featured Work</p>
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
										<p>{name}</p>
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
