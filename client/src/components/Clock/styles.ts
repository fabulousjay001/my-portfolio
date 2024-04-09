/** @format */

import { ThemeContext } from '@emotion/react';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useClockStyles = makeStyles((theme: Theme) => ({
	time: { fontSize: '16px' },
}));
