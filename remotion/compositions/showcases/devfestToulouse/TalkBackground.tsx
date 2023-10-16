import React from 'react';
import {interpolate, staticFile, useCurrentFrame} from 'remotion';

import {BackgroundFiller} from '../../../design/atoms/BackgroundFiller';

export const TalkBackground = () => {
	const frame = useCurrentFrame();
	const blur = interpolate(frame, [0, 20], [0, 0.5]);

	return (
		<BackgroundFiller
			imageUrl={staticFile('/images/showcases/devfestToulouse/devfestToulouse2023Background.png')}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				filter: `blur(${blur}px)`,
				transform: 'scale(1)',
			}}
		/>
	);
};
