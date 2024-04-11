/** @format */

import { description } from '../About/Data';
/** @format */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useProjectStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '1440px',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		paddingTop: '200px',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
			paddingTop: '30px',
		},
	},
	sectionName: {
		[theme.breakpoints.down('sm')]: {
			fontWeight: 'bold',
		},
	},
	header: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'center',
			width: '27%',
		},
	},
	flexContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: '120px',
	},
	flexItem: {},
	Cardcontainer: {},
	image: {
		width: '400px',
		height: '380px',
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			width: '360px',
			height: ' 236px',
			objectFit: 'cover',
			marginLeft: '25px',
		},
	},
	projectName: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			justifyContent: 'center',
			paddingRight: '44%',
			fontSize: '20px',
			textAlign: 'center',
		},
	},
	description: {
		width: '400px',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
}));
