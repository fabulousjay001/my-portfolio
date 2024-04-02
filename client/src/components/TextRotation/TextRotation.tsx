/** @format */

import { useTextRotationStyles } from './style';
import { ArrowDownward } from '@mui/icons-material';

const TextRotation = () => {
	const classes = useTextRotationStyles();
	const scrollText = 'Scroll down - Scroll down -';

	return (
		<div className={classes.circle}>
			<div className={classes.circularText}>
				{scrollText.split('').map((char, i) => (
					<span
						key={i}
						className={classes.ourSpan}
						style={{
							transform: `rotate(${i * 14}deg)`,
						}}>
						{char}
					</span>
				))}
			</div>
			<div
				className={classes.arrow}
				style={{
					fontSize: '100px',
					position: 'absolute',
					bottom: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					transition: 'transform 0.3s ease-in-out',
				}}>
				<ArrowDownward
					style={{
						fontSize: '100px',
						transition: 'transform 0.3s ease-in-out',
					}}
				/>
			</div>
		</div>
	);
};

export default TextRotation;
