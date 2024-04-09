/**
 * eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/**
 * eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/** @format */

import { useNavStyles } from './styles';
import { link } from './NavData';
import { FC, useContext, useState } from 'react';
import Img from '../../assets/images/LOGO.png';
import { Close, DragHandle } from '@mui/icons-material';
import { NavTypes } from './types';
import { ThemeContext } from '../../App';
import Themetoggle from '../../contexts/ThemeToggle';
import zIndex from '@mui/material/styles/zIndex';
import { AppTheme } from '../../contexts/AppTheme';
import Clock from '../Clock/Clock';

const NavBar: FC<NavTypes> = () => {
	const classes = useNavStyles();
	const [showLinks, setShowLinks] = useState(false);

	const { theme } = useContext(ThemeContext);

	const navStyle: AppTheme = {
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
		...navStyle.common,
		...(theme === 'light' ? navStyle.light : navStyle.dark),
	};

	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<img
					src={Img}
					className={classes.logo}
				/>
				<div
					className={classes.menu}
					style={{ ...themeStyle }}>
					{showLinks ? (
						<Close
							style={{ fontSize: '50px', cursor: 'pointer' }}
							className={classes.menuIcon}
							onClick={() => setShowLinks(!showLinks)}
						/>
					) : (
						<DragHandle
							style={{ fontSize: '50px', cursor: 'pointer' }}
							className={classes.menuIcon}
							onClick={() => setShowLinks(!showLinks)}
						/>
					)}
				</div>
				<div className={classes.left}>
					<Clock />
					<Themetoggle />
				</div>
			</div>

			{showLinks && (
				<>
					<div className={classes.menuContainer}>
						<ul
							className={classes.unorderedList}
							style={themeStyle}>
							{link.map((link) => {
								return (
									<li>
										<a
											className={classes.listItem}
											href={link.url}
											style={themeStyle}>
											{link.title}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default NavBar;
