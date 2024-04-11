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
		height: '70vh',
		fontFamily: 'Clash Display',
		marginTop: '80px',
		[theme.breakpoints.down('sm')]: {
			background: 'red',
			marginTop: '10px',
		},
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
		fontSize: '72px',
		fontWeight: 600,
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			fontSize: '36px',
			width: '30%',
			marginLeft: '24px',
		},
	},
	btn: {
		display: 'flex',
		gap: 20,
		width: '400px',
		marginTop: '200px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '70px',

			width: '352px',
			justifyContent: 'space-around',
		},
	},
	description: {
		fontSize: '24px',
		width: '80%',
	},

	hero: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},
	imgContainer: { width: '100%' },
	img: {
		marginTop: '130px',
		height: '40vh',
		width: ' 100%',
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			marginTop: '20px',
			width: '360px',
			marginLeft: '24px',
			marginRight: '24px',
			// height: '30vh',
		},
	},

	circle: {
		position: 'relative',
		width: '200px',
		height: '200px',
		borderRadius: '50%',
		marginTop: '160px',
		top: '700px',
		[theme.breakpoints.down('sm')]: {},
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
		[theme.breakpoints.down('sm')]: { width: '300px', marginLeft: '30px' },
	},
	test: {},
	dash: { width: '20px' },

	socialInfo: {
		// marginTop: '24px',
	},
	social: { width: '100%' },
	url: { textDecoration: 'none' },

	infoText: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		fontSize: '20px',
		fontWeight: 'bold',

		[theme.breakpoints.down('sm')]: { fontSize: '16px' },
	},
}));
