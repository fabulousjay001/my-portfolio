/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

import { useState } from 'react';
import { useClockStyles } from './styles';
import { time } from 'console';

/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

const Clock = () => {
	const classes = useClockStyles();
	let time = new Date().toLocaleTimeString();
	const [CurrentTime, setCurrentTime] = useState(time);

	const updateTime = () => {
		let time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};

	setInterval(updateTime, 1000);

	return (
		<section>
			<p className={classes.time}> {CurrentTime} PM </p>
		</section>
	);
};

export default Clock;
