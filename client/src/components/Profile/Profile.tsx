/** @format */

import { useProfileStyles } from './styles';
import Typical from 'react-typical';
import Images from '../../assets/images/prof-pic.jpg';
import { social } from './Data';
import TextRotation from '../TextRotation/TextRotation';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { AppTheme } from '../../contexts/AppTheme';
import { Box } from '@mui/material';

const Profile = () => {
	const classes = useProfileStyles();
	const { theme } = useContext(ThemeContext);

	const profileStyle: AppTheme = {
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
		},
	};

	const themeStyle = {
		...profileStyle.common,
		...(theme === 'light' ? profileStyle.light : profileStyle.dark),
	};

	return (
		<div
			className={classes.root}
			style={themeStyle}>
			<div className={classes.Container}>
				<div className={classes.hero}>
					<div className={classes.headerText}>
						{' '}
						Creative Front - End <span>Developer.</span>{' '}
						<div>
							<Box
								sx={{
									fontSize: '36px',
									position: 'absolute',
									width: '25%',
									fontWeight: 'normal',
									'@media (max-width:650px)': {
										position: 'absolute',
										top: '200px',
										width: '90%',
										fontSize: '20px',
									},
									'@media (min-width:960px)': {},
								}}>
								<Typical
									loop={Infinity}
									steps={[
										'Hello guys,',
										2000,
										"I'm Ayo, a creative frontend developer.",
										2000,
										'I help brands build creative, intuitive ',

										2000,
										'and accessible interfaces that meets user requirements.',

										3000,
										'',
									]}
								/>
							</Box>
						</div>
						<div
							className={classes.btn}
							style={{ cursor: 'pointer' }}>
							<LightButton text="Let's talk" />
							<DarkButton text="View resume" />
						</div>
					</div>

					<div className={classes.imgContainer}>
						{/* eslint-disable-next-line jsx-a11y/img-redundant-alt, jsx-a11y/img-redundant-alt */}
						<img
							src={Images}
							className={classes.img}
							alt="picture"
						/>
						<div className={classes.info}>
							{social.map((item) => {
								const { id, url, icon, text, dash } = item;
								return (
									<section className={classes.socialInfo}>
										<div
											className={classes.social}
											key={id}>
											{' '}
											<a
												style={themeStyle}
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className={classes.url}>
												<p className={classes.infoText}>
													{text}
													{icon}{' '}
													<span style={{ marginRight: '6px' }}> {dash}</span>
												</p>{' '}
											</a>
										</div>
									</section>
								);
							})}
						</div>
					</div>
				</div>

				<TextRotation />
			</div>
		</div>
	);
};

export default Profile;
