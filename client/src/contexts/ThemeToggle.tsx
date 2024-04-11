/** @format */

import { useContext, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../App';
import { AppTheme } from './AppTheme';

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const [show, setShow] = useState(false);

	const iconStyle: AppTheme = {
		dark: {
			backgroundColor: 'white',
			color: 'black',
		},
		light: {
			backgroundColor: 'black',
			color: 'white',
		},
		common: {
			transition: 'all 1s ease',
		},
	};

	const themeStyle = {
		...iconStyle.common,
		...(theme === 'light' ? iconStyle.light : iconStyle.dark),
	};

	const handleThemeToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		setShow(!show);

		console.log('yes');
	};

	return (
		<div>
			{show && theme ? (
				<LightModeIcon
					style={{
						borderRadius: '50%',
						width: '30px',
						fontSize: '30px',
						...themeStyle,
					}}
					onClick={handleThemeToggle}
				/>
			) : (
				<DarkModeIcon
					style={{
						borderRadius: '50%',
						width: '30px',
						fontSize: '30px',
						...themeStyle,
					}}
					onClick={handleThemeToggle}
				/>
			)}
		</div>
	);
};

export default ThemeToggle;
