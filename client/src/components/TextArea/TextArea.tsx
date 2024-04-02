/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

/** @format */

import { ThemeContext } from '../../App';
import { useContext, useState } from 'react';
import { useTextAreaStyles } from './styles';
import { TextareaAutosize } from '@material-ui/core';
import LightButton from '../Button/Button';
import { social } from '../Profile/Data';

interface TextAreaProps {
	label: string; // Define the type of the label prop
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
}

const TextArea = ({ label }: TextAreaProps) => {
	const [value, setValue] = useState('');
	const classes = useTextAreaStyles();
	const theme = useContext(ThemeContext);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.target.value); // Update value state when textarea content changes
	};
	const handlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.target.value); // Update value state when textarea content changes
	};
	return (
		<section className={classes.root}>
			{label && <label>{label}</label>}
			<form className={classes.form}>
				<TextareaAutosize
					className={classes.textArea}
					onChange={handleChange}
					name="Full Name"
				/>
				<TextareaAutosize
					className={classes.textArea}
					onChange={handlChange}
					name="email"
				/>
				<TextareaAutosize
					className={classes.textArea}
					onChange={handleChange}
					style={{ height: '500px' }}
					name="discription"
				/>
				<div className={classes.formFooter}>
					<LightButton text="Send Messsage" />

					<section className={classes.linkContainer}>
						{social.map((item) => {
							const { id, url, icon, text, dash } = item;
							return (
								<div className={classes.socialInfo}>
									<div
										className={classes.social}
										key={id}>
										{' '}
										<a
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className={classes.url}>
											<p className={classes.infoText}>
												{text}
												{icon} <span> {dash}</span>
											</p>{' '}
										</a>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</form>
		</section>
	);
};

export default TextArea;
