/** @format */

import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../App';

const ThemeToggle = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div>
			{/* {value === 'light' ? (
                <DarkModeIcon
                    style={{
                        background: 'black',
                        color: 'white',
                        borderRadius: '50%',
                        width: '30px',
                        fontSize: '30px',
                    }}
                    onClick={() => {
                        handleSetValue('dark'); // Update theme to dark first
                        document.body.className = 'dark'; // Then update body class
                    }}
                />
            ) : (
                <DarkModeIcon
                    style={{
                        background: 'white',
                        color: 'black',
                        borderRadius: '50%',
                        width: '30px',
                        fontSize: '30px',
                    }}
                    onClick={() => {
                        handleSetValue('light'); // Update theme to light first
                        document.body.className = 'light'; // Then update body class
                    }}
                />

            )} */}

			<DarkModeIcon
				onClick={handleThemeToggle}
				style={{
					borderRadius: '50%',
					width: '30px',
					fontSize: '30px',
				}}
			/>
		</div>
	);
};

export default ThemeToggle;
