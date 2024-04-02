/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useButtonStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		gap: 20,
	},

	button: {
		background: theme.design.ayo.waz_black,
		color: theme.design.ayo.waz_white,
		border: '2px solid white',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,
		cursor: 'pointer',

		'&:hover': {
			color: 'black',
			background: 'white',
		},
	},
	buttonLight: {
		background: theme.design.ayo.waz_white,
		color: theme.design.ayo.waz_black,
		border: '2px solid black',
		transition: '1s',
		borderRadius: theme.spacing(4),
		padding: theme.spacing(1.5, 5),
		fontFamily: theme.design.font.openSans,
		fontSize: theme.spacing(2),
		fontWeight: theme.typography.fontWeightBold,

		'&:hover': {
			color: theme.design.ayo.waz_white,
			background: theme.design.ayo.waz_black,
		},
	},

	contactUs: {},
}));
