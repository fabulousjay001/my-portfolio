/** @format */

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFooterStyles = makeStyles((theme: Theme) => ({
	line: { marginTop: '100px' },
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		fontSize: '20px',
	},
	footerName: { display: 'flex', alignItems: 'center' },
	moreInfo: {},
}));
