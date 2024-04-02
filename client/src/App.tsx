/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

// /**
//  * eslint-disable @typescript-eslint/no-unused-vars
//  *
//  * @format
//  */

// /**
//  * eslint-disable @typescript-eslint/no-unused-vars
//  *
//  * @format
//  */

// /**
//  * eslint-disable @typescript-eslint/no-unused-vars
//  *
//  * @format
//  */

// /** @format */

// import * as React from 'react';
// import { useAppStyles } from './styles';
// import { theme } from './theme';
// import { createContext, useState } from 'react';
// import About from './components/About/About';
// import NavBar from './components/NavBar/NavBar';
// import Profile from './components/Profile/Profile';
// // import { useThemeContext } from './context/theme';
// import Featured from './components/Featured/Featured';
// import Contact from './components/Contact/Contact';

// type ThemeContextProps = {
// 	theme: string;
// 	setTheme: any;
// };
// export const ThemeContext = createContext({} as ThemeContextProps);

// export default function App() {
// 	const classes = useAppStyles();
// 	const [theme, setTheme] = useState('');

// 	return (
// 		<ThemeContext.Provider value={{ theme, setTheme }}>
// 			<div data-theme="dark">
// 				<NavBar
// 					url={''}
// 					title={''}
// 					id={0}
// 				/>
// 				<Profile />
// 				<About />
// 				<Featured />
// 				<Contact />
// 			</div>
// 		</ThemeContext.Provider>
// 	);
// }

/** @format */

import * as React from 'react';
import { useAppStyles } from './styles';
import { theme } from './theme';
import { createContext, useState } from 'react';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import { useThemeContext } from './context/theme';

import Featured from './components/Featured/Featured';
import Contact from './components/Contact/Contact';

type ThemeContextProps = {
	theme: string;
	setTheme: any;
};
export const ThemeContext = createContext({} as ThemeContextProps);

export default function App() {
	const classes = useAppStyles();
	const [theme, setTheme] = useState('');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div data-theme="dark">
				<NavBar
					url={''}
					title={''}
					id={0}
				/>
				<Profile />
				<About />
				<Featured />
				<Contact />
			</div>
		</ThemeContext.Provider>
	);
}
