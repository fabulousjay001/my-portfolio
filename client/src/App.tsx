/** @format */

import * as React from 'react';
import { useAppStyles } from './styles';
import { theme } from './theme';
import { createContext, useState } from 'react';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Featured from './components/Featured/Featured';
import Contact from './components/Contact/Contact';
import { AppTheme } from './contexts/AppTheme';
import Footer from './components/Footer/Footer';

type ThemeContextProps = {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
};
export const ThemeContext = createContext({} as ThemeContextProps);

export default function App() {
	const [theme, setTheme] = useState('light');

	const AppStyle: AppTheme = {
		dark: {
			backgroundColor: '#121212',
			color: 'white',
		},
		light: {
			backgroundColor: 'white',
			color: '#121212',
		},
		common: {
			transition: 'all 1s ease',
		},
	};

	const themeStyle = {
		...AppStyle.common,
		...(theme === 'light' ? AppStyle.light : AppStyle.dark),
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div style={themeStyle}>
				<NavBar
					url={''}
					title={''}
					id={0}
				/>
				<Profile />
				<About />
				<Featured />
				<Contact />
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}
