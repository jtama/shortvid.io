import {CSSProperties} from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';

const DevfestToulouse2023Logo: React.FC = () => {
	return (
		<Img
			src={staticFile('/images/showcases/devfestToulouse/devfestToulouse2023Logo.svg')}
			width={1000}
			height="auto"
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		/>
	);
};

export const DevfestToulouse2023Intro: React.FC = () => {
	const frame = useCurrentFrame();

	const slide = interpolate(frame, [20, 70], [0, -1000], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const defaultPathStyle: CSSProperties = {
		zIndex: 1,
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	};

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					...defaultPathStyle,
					left: slide,
					clipPath: 'polygon(0% 0%, 30% 0, 49.8% 49%, 31% 100%, 0% 100%)',
				}}
			>
				<DevfestToulouse2023Logo />
			</div>
			<div
				style={{
					...defaultPathStyle,
					right: slide,
					clipPath:
						'polygon(100% 0, 100% 100%, 30.9% 100%, 49.7% 49%, 29.9% 0%)',
				}}
			>
				<DevfestToulouse2023Logo />
			</div>
		</AbsoluteFill>
	);
};
