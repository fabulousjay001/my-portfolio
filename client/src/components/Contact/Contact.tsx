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

/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

import { SetStateAction, useContext, useState } from 'react';
import { useContactStyles } from './styles';
import { ThemeContext } from '../../App';
import TextArea from '../TextArea/TextArea';
import { formTypes } from './types';

const Contact = () => {
	const classes = useContactStyles();
	const theme = useContext(ThemeContext);

	const [formData, setFormData] = useState({
		FullName: '',
		email: '',
		message: '',
	});

	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		const changeField = evt.target.name;
		const newValue = evt.target.value;

		console.log(newValue);

		setFormData((currData) => {
			return { ...currData, [changeField]: newValue };
		});
	};

	return (
		<section className={classes.root}>
			<div style={{ fontSize: '24px' }}>Contact</div>
			<div
				className={classes.container}
				style={{ fontSize: '30px' }}>
				<p>Got an Idea? Holla at me , let's talk!</p>

				<div className={classes.contactContainer}>
					<TextArea
						label=""
						onChange={handleChange}
						value={formData.message}
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
