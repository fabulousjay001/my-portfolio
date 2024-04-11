/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useAboutStyles = makeStyles((theme: Theme) => ({
	root: {
		// display: "flex",
		margin: 'auto',
		justifyContent: 'space-evenly',

		fontFamily: 'Clash display',
	},
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '1440px',
		margin: 'auto',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			fontSize: '20px',
			flexDirection: 'column',
			maxWidth: 'fit-content',
			fontWeight: 'bold',
			marginTop: '60%',
		},
	},
	content: {
		width: '65%',
		fontSize: '40px',
		marginBottom: '16px',
		[theme.breakpoints.down('sm')]: {
			width: '360px',
			fontSize: theme.spacing(2.5),
			textAlign: 'center',
			// fontWeight: '200',
		},
	},
	btnGroup: {
		display: 'flex',
		gap: 20,
		[theme.breakpoints.down('sm')]: {
			width: '160px',
			fontSize: theme.spacing(1.5),
		},
	},
}));
