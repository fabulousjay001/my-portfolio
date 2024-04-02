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
	},
	sectionName: {},
	description: { width: '400px' },
}));
