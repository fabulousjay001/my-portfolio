/** @format */

import { Translate } from '@mui/icons-material';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProfileStyles = makeStyles((theme: Theme) => ({
	'@keyframes rotateText': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
	root: {
		height: '100vh',
		fontFamily: 'Clash Display',
		marginTop: '30px',
	},

	profileContainer: {},
	Container: {
		margin: 'auto',
		width: '1440px',
		justifyContent: 'space-between',
		fontFamily: 'Clash Display',
	},
	textContainer: {
		flexDirection: 'column',
		width: '80%',
	},
	headerText: {
		fontSize: '80px',
		fontWeight: 600,
		width: '100%',
	},
	btn: { display: 'flex', gap: 20, width: '400px' },
	description: {
		fontSize: '24px',
		width: '80%',
	},

	hero: { display: 'flex', justifyContent: 'space-between' },
	imgContainer: {},
	img: {
		marginTop: '180px',
		height: '500px',
		width: ' 600px',
		objectFit: 'cover',
	},

	circle: {
		position: 'relative',
		width: '200px',
		height: '200px',
		borderRadius: '50%',
		marginTop: '160px',
	},
	circularText: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		animation: '8s linear infinite',
		animationName: '$rotateText',
	},
	ourSpan: {
		position: 'absolute',
		left: '50%',
		transformOrigin: '0 100px',
		fontSize: '24px',
	},
	arrow: {
		position: 'fixed',
		marginLeft: '32px',
		transform: 'Translate(0%, 20%)',
		cursor: 'pointer',
	},
	rotated: {
		position: 'absolute',
	},
	info: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '480px',
	},
	test: {},
	dash: { width: '20px' },

	socialInfo: {
		marginTop: '24px',
	},
	social: {},
	url: { color: 'white', textDecoration: 'none' },

	infoText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 500,
	},
}));
