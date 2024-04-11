/** @format */

import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useNavStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		margin: 'auto',
		alignItems: 'center',
		height: theme.spacing(12.5),
		fontFamily: 'Clash Display',
	},

	navContainer: {
		width: '1440px',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'space-around',
		},
	},
	navItem: {},
	menu: {
		display: 'flex',
		justifyContent: 'center',
	},
	menuIcon: {},
	left: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		cursor: 'pointer',
		width: '150px',
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},
	time: {},
	menuContainer: {
		position: 'absolute',
		top: '82px',
		width: '100%',
		zIndex: 1,
	},
	unorderedList: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		listStyle: 'none',
		paddingRight: '140px',
		[theme.breakpoints.down('sm')]: {
			paddingRight: '48px',
		},
	},
	listItem: {
		listStyle: 'none',
		textDecoration: 'none',
		fontWeight: 600,
		fontSize: '64px',
		display: 'flex',
		justifyContent: 'center',
		margin: 0,
		padding: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '44px',
		},
	},
	logo: {
		background: theme.design.ayo.waz_black,
		color: theme.design.ayo.waz_white,
		height: '50px',
	},
	logoName: {
		width: theme.spacing(30),
		paddingLeft: theme.spacing(12),
	},
}));
