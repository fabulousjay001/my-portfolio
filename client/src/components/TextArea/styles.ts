/** @format */

// import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useTextAreaStyles = makeStyles((theme: Theme) => ({
	root: {
		// display: 'flex',
		// margin: 'auto',
		// alignItems: 'center',
		// height: theme.spacing(9.5),
		// fontFamily: 'Clash Display',
	},
	form: {
		width: '900px',
		margin: 'auto',
		marginTop: '50px',
		color: 'white',
	},
	textArea: {
		width: '100%',
		minHeight: '100px',
		padding: '8px',
		fontSize: '16px',
		outline: 'none',
		fontFamily: 'inherit',
		resize: 'vertical',
		background: '#121212',
		color: 'white',
	},
	linkContainer: { display: 'flex' },
	socialInfo: {},
	social: {},
	url: { color: 'white', textDecoration: 'none' },
	formFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	infoText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 500,
	},
}));
