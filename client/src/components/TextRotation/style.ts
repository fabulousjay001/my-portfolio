/** @format */

import { Translate } from '@mui/icons-material';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useTextRotationStyles = makeStyles((theme: Theme) => ({
	'@keyframes rotateText': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},

	circle: {
		position: 'absolute',
		bottom:'120px',
		width: '200px',
		height: '200px',
		borderRadius: '50%',
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
		top: '50px',
		transform: 'translateX(-50%)',
		cursor: 'pointer',
		fontSize: '100px',
		position: 'absolute',
		bottom: '20px',
		left: '50%',
		transition: 'transform 0.3s ease-in-out',
	},
	rotated: {
		position: 'absolute',
	},
	info: {
		width: '230px',
	},
	test: {},
	social: {},
}));
