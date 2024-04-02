/**
 * eslint-disable jsx-a11y/img-redundant-alt
 *
 * @format
 */

/* eslint-disable react/jsx-no-comment-textnodes */
/** @format */

import { useProfileStyles } from './styles';
import Typical from 'react-typical';
import Images from '../../assets/images/prof-pic.jpg';
import { social } from './Data';
import TextRotation from '../TextRotation/TextRotation';
import { DarkButton } from '../Button/Button';
import LightButton from '../Button/Button';

const Profile = () => {
	const classes = useProfileStyles();
	return (
		<div className={classes.root}>
			<div className={classes.Container}>
				<div className={classes.hero}>
					<div className={classes.headerText}>
						{' '}
						Creative Front - End <span>Developer.</span>{' '}
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
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className={classes.url}>
												<p className={classes.infoText}>
													{text}
													{icon} <span> {dash}</span>
												</p>{' '}
											</a>
										</div>
									</section>
								);
							})}
						</div>
					</div>
				</div>
				<div
					style={{
						fontSize: '20px',
						position: 'absolute',
						top: '450px',
					}}>
					<Typical
						loop={Infinity}
						steps={[
							'Hello guys,',
							2000,
							"I'm Ayo, a creative frontend developer.",
							2000,
							'I help brands build creative , intuitive ,and ',

							2000,
							'accessible interfaces that meets user requirements.',

							3000,
							'',
						]}
					/>
				</div>

				<TextRotation />
			</div>
		</div>
	);
};

export default Profile;
