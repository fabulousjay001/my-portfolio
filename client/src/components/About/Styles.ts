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
	},
	content: {
		width: '65%',
		fontSize: '40px',
		marginBottom: '16px',
	},
	btnGroup: { display: 'flex', gap: 20 },
}));
