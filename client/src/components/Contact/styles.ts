/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useContactStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '1440px',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 'auto',
		paddingTop: '200px',
		gap: '400px',
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		marginTop: '64px',
	},
	contactContainer: {
		border: '1px solid white',
	},
}));
